"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { Eyebrow } from "./Section";
import NetworkBackground from "./NetworkBackground";

const words = ["Protegemos", "organizaciones", "frente", "a", "los", "riesgos", "digitales", "más", "críticos."];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 opacity-70">
        <NetworkBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/70 to-ink" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Eyebrow>Auditorías · Pentesting · GRC · Respuesta a incidentes</Eyebrow>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: "easeOut" }}
              className={`inline-block mr-3 ${word === "críticos." ? "text-brand-cyan" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          Consultoría especializada en ciberseguridad, gestión de riesgos,
          resiliencia operacional, gobierno y cumplimiento para organizaciones
          que requieren decisiones basadas en evidencia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button href="/contacto">Solicitar una evaluación</Button>
          <Button href="/servicios" variant="secondary">
            Ver servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
