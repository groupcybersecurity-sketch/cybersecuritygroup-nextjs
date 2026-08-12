"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Status = "found" | "missing" | "error";

interface CheckResult {
  status: Status;
  raw?: string;
  note?: string;
}

const DOH_ENDPOINT = "https://cloudflare-dns.com/dns-query";
const DKIM_SELECTORS = [
  "google",
  "selector1",
  "selector2",
  "k1",
  "s1",
  "s2",
  "default",
  "mail",
  "dkim",
];

function normalizeDomain(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");
}

async function queryTxt(name: string): Promise<string[]> {
  const res = await fetch(
    `${DOH_ENDPOINT}?name=${encodeURIComponent(name)}&type=TXT`,
    { headers: { Accept: "application/dns-json" } }
  );
  if (!res.ok) throw new Error("dns query failed");
  const data = await res.json();
  const answers = (data.Answer ?? []) as { data: string }[];
  return answers.map((a) => a.data.replace(/^"|"$/g, "").replace(/" "/g, ""));
}

async function checkSpf(domain: string): Promise<CheckResult> {
  try {
    const records = await queryTxt(domain);
    const spf = records.find((r) => r.toLowerCase().startsWith("v=spf1"));
    if (!spf) return { status: "missing" };
    let note = "";
    if (spf.includes("-all")) note = "Política estricta (-all): rechaza correos no autorizados.";
    else if (spf.includes("~all")) note = "Política de softfail (~all): marca como sospechoso, no rechaza.";
    else if (spf.includes("+all")) note = "Política permisiva (+all): cualquiera puede enviar en tu nombre. Revisar con urgencia.";
    return { status: "found", raw: spf, note };
  } catch {
    return { status: "error" };
  }
}

async function checkDmarc(domain: string): Promise<CheckResult> {
  try {
    const records = await queryTxt(`_dmarc.${domain}`);
    const dmarc = records.find((r) => r.toLowerCase().startsWith("v=dmarc1"));
    if (!dmarc) return { status: "missing" };
    const policy = dmarc.match(/p=(\w+)/i)?.[1]?.toLowerCase();
    let note = "";
    if (policy === "reject") note = "Política 'reject': los correos falsificados se bloquean.";
    else if (policy === "quarantine") note = "Política 'quarantine': los correos falsificados van a spam.";
    else if (policy === "none") note = "Política 'none': solo monitoreo, no bloquea correos falsificados.";
    return { status: "found", raw: dmarc, note };
  } catch {
    return { status: "error" };
  }
}

async function checkDkim(domain: string): Promise<CheckResult> {
  try {
    const attempts = await Promise.allSettled(
      DKIM_SELECTORS.map(async (selector) => {
        const records = await queryTxt(`${selector}._domainkey.${domain}`);
        const dkim = records.find((r) => /v=dkim1|p=/i.test(r));
        if (!dkim) throw new Error("not found");
        return { selector, raw: dkim };
      })
    );
    const found = attempts.find(
      (a): a is PromiseFulfilledResult<{ selector: string; raw: string }> =>
        a.status === "fulfilled"
    );
    if (found) {
      return {
        status: "found",
        raw: found.value.raw,
        note: `Encontrado con el selector "${found.value.selector}".`,
      };
    }
    return {
      status: "missing",
      note: "No se encontró con selectores comunes — puede existir con un selector distinto al probado aquí.",
    };
  } catch {
    return { status: "error" };
  }
}

function StatusBadge({ status }: { status: Status }) {
  const styles = {
    found: "border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan-soft",
    missing: "border-red-500/30 bg-red-500/10 text-red-300",
    error: "border-white/20 bg-white/5 text-muted",
  };
  const labels = { found: "Encontrado", missing: "No encontrado", error: "Error al consultar" };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

function ResultRow({
  label,
  description,
  result,
}: {
  label: string;
  description: string;
  result: CheckResult;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-panel/80 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-mono text-sm font-semibold text-white">{label}</h3>
          <p className="mt-1 text-xs text-muted">{description}</p>
        </div>
        <StatusBadge status={result.status} />
      </div>
      {result.raw && (
        <p className="mt-4 break-all rounded-lg border border-white/10 bg-ink/60 p-3 font-mono text-xs text-white/80">
          {result.raw}
        </p>
      )}
      {result.note && <p className="mt-3 text-sm text-muted">{result.note}</p>}
    </div>
  );
}

export default function DomainChecker() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<{
    spf: CheckResult;
    dkim: CheckResult;
    dmarc: CheckResult;
  } | null>(null);

  async function handleCheck(e: FormEvent) {
    e.preventDefault();
    const clean = normalizeDomain(domain);
    if (!clean || !clean.includes(".")) {
      setError("Ingresa un dominio válido, ej: tuempresa.cl");
      return;
    }
    setError("");
    setLoading(true);
    setResults(null);
    const [spf, dkim, dmarc] = await Promise.all([
      checkSpf(clean),
      checkDkim(clean),
      checkDmarc(clean),
    ]);
    setResults({ spf, dkim, dmarc });
    setLoading(false);
  }

  const hasIssue =
    results &&
    (results.spf.status !== "found" ||
      results.dkim.status !== "found" ||
      results.dmarc.status !== "found" ||
      results.spf.raw?.includes("+all"));

  return (
    <div>
      <form onSubmit={handleCheck} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="tuempresa.cl"
          className="flex-1 rounded-lg border border-white/15 bg-panel px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,174,239,0.35)] transition-shadow hover:shadow-[0_16px_40px_rgba(0,174,239,0.5)] disabled:opacity-60"
        >
          {loading ? "Verificando..." : "Verificar"}
        </button>
      </form>

      {error && (
        <p className="mt-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      {results && (
        <div className="mt-8 grid gap-4">
          <ResultRow
            label="SPF"
            description="Define qué servidores pueden enviar correo en nombre de tu dominio."
            result={results.spf}
          />
          <ResultRow
            label="DKIM"
            description="Firma criptográfica que confirma que el correo no fue alterado en el camino."
            result={results.dkim}
          />
          <ResultRow
            label="DMARC"
            description="Define qué hacer con los correos que fallan la validación SPF o DKIM."
            result={results.dmarc}
          />

          {hasIssue && (
            <div className="mt-2 rounded-2xl border border-brand-cyan/30 bg-brand-cyan/10 p-6 text-center">
              <p className="text-sm text-white">
                Tu dominio tiene configuraciones que pueden dejarlo expuesto a
                suplantación de identidad (spoofing) por correo.
              </p>
              <Link
                href="/contacto"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,174,239,0.35)] transition-shadow hover:shadow-[0_16px_40px_rgba(0,174,239,0.5)]"
              >
                Hablar con un especialista
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
