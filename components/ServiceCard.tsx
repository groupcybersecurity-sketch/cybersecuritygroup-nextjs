"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/content";
import { partners } from "@/lib/content";
import CategoryIcon from "./CategoryIcon";

export default function ServiceCard({ service }: { service: Service }) {
  const partner = partners.find((p) => p.slug === service.partnerSlug);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      id={service.id}
      className="scroll-mt-28 rounded-2xl border border-white/10 bg-panel/80 p-7"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-brand-cyan/10 text-brand-cyan">
        <CategoryIcon category={service.category} />
      </div>
      <span className="mt-4 block font-mono text-[11px] uppercase tracking-widest text-brand-cyan-soft">
        {service.category}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>

      {partner && (
        <div className="mt-4 flex items-center gap-2.5 border-t border-dashed border-white/10 pt-4">
          <Image
            src={partner.logo}
            alt={`Logo de ${partner.name}`}
            width={24}
            height={24}
            className="rounded-md border border-white/10"
          />
          <span className="text-xs text-muted">
            Servicio potenciado con{" "}
            <Link
              href="/quienes-somos#aliados"
              className="font-semibold text-brand-cyan-soft hover:underline"
            >
              {partner.name}
            </Link>
          </span>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full border border-brand-cyan/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-brand-cyan-soft">
          {service.status}
        </span>
        <Link
          href="/contacto"
          className="text-sm font-medium text-white/70 transition-colors hover:text-brand-cyan"
        >
          Consultar →
        </Link>
      </div>
    </motion.div>
  );
}
