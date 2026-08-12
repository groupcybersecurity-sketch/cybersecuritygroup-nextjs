import type { Metadata } from "next";
import Image from "next/image";
import Section, { Eyebrow, Reveal } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quiénes somos | CyberSecurity Group",
  description: "Conoce el enfoque y metodología de CyberSecurity Group.",
};

const values = [
  {
    title: "Enfoque basado en evidencia",
    body: "No entregamos listas genéricas de recomendaciones. Cada hallazgo va acompañado de evidencia reproducible y de una severidad calculada según el riesgo real para tu negocio.",
  },
  {
    title: "Independencia",
    body: "No vendemos software ni licencias de terceros. Nuestra recomendación no está condicionada por ninguna marca — solo por lo que reduce riesgo real.",
  },
  {
    title: "Confidencialidad",
    body: "Toda la información de un cliente se maneja bajo acuerdo de confidencialidad y se elimina de nuestros sistemas al cierre del proyecto, salvo que se acuerde lo contrario.",
  },
];

const certifications = [
  { acronym: "OSCP", name: "Offensive Security Certified Professional" },
  { acronym: "CEH", name: "Certified Ethical Hacker" },
  { acronym: "ISO 27001 LA", name: "Lead Auditor ISO/IEC 27001" },
  { acronym: "eJPT v2", name: "eLearnSecurity Junior Penetration Tester" },
  { acronym: "AZ-900", name: "Microsoft Azure Fundamentals" },
];

const steps = [
  {
    id: "01",
    title: "Diagnóstico inicial",
    body: "Conversamos sobre tu infraestructura, tu equipo y tus principales preocupaciones para definir el alcance correcto — sin sobrevender servicios que no necesitas.",
    status: "Sin costo",
  },
  {
    id: "02",
    title: "Ejecución",
    body: "Realizamos el trabajo acordado (auditoría, pentesting, revisión GRC) con actualizaciones periódicas, no solo un informe al final.",
    status: "En curso",
  },
  {
    id: "03",
    title: "Informe y cierre",
    body: "Entregamos un informe ejecutivo para dirección y uno técnico para tu equipo, y acompañamos la remediación de los hallazgos críticos.",
    status: "Seguimiento incluido",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <Section className="!pb-0">
        <Reveal className="max-w-2xl">
          <Eyebrow>Sobre la firma</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Encontramos lo que otros pasan por alto.
          </h1>
          <p className="mt-4 text-muted">
            CyberSecurity Group nació de una idea simple: la mayoría de los
            incidentes de seguridad no ocurren por ataques sofisticados, sino
            por hallazgos que nadie documentó a tiempo. Nuestro trabajo es
            cerrar esa brecha antes de que alguien más la use.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-panel/80 p-7">
                <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Eyebrow>Credenciales</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Certificaciones del equipo
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.acronym} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-panel/80 p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-brand-cyan/10 text-brand-cyan">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5" />
                  </svg>
                </div>
                <p className="mt-3 font-mono text-sm font-semibold text-white">
                  {cert.acronym}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{cert.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Un proceso simple, sin sorpresas
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-col gap-4">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.08}>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-panel/80 p-6 sm:flex-row sm:items-center">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-cyan/40 font-mono text-sm text-brand-cyan-soft">
                  {step.id}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted">{step.body}</p>
                </div>
                <span className="rounded-full border border-brand-cyan/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-brand-cyan-soft">
                  {step.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="aliados">
        <Reveal className="max-w-2xl">
          <Eyebrow>Metodología</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Aliados tecnológicos
          </h2>
          <p className="mt-4 text-muted">
            Además de nuestro equipo, incorporamos herramientas y plataformas
            especializadas en servicios puntuales para ampliar cobertura y
            profundidad sin depender solo del trabajo manual.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {partners.map((partner, i) => (
            <Reveal key={partner.slug} delay={i * 0.08}>
              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-panel/80 p-7">
                <Image
                  src={partner.logo}
                  alt={`Logo de ${partner.name}`}
                  width={64}
                  height={64}
                  className="flex-shrink-0 rounded-2xl border border-white/10"
                />
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-brand-cyan-soft">
                    {partner.role}
                  </span>
                  <h3 className="mt-1 font-semibold text-white">{partner.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {partner.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="¿Listo para saber dónde está tu riesgo real?"
        description="Partamos con un diagnóstico breve, sin costo, para entender el alcance correcto para tu organización."
      />
    </>
  );
}
