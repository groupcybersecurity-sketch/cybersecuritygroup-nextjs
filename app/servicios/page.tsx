import type { Metadata } from "next";
import Section, { Eyebrow, Reveal } from "@/components/Section";
import ServiceTabs from "@/components/ServiceTabs";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Servicios | CyberSecurity Group",
  description:
    "Auditorías, pentesting, GRC, respuesta a incidentes, capacitación y arquitectura de seguridad.",
};

export default function ServiciosPage() {
  return (
    <>
      <Section className="!pb-0">
        <Reveal className="max-w-2xl">
          <Eyebrow>Registro completo de servicios</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Servicios
          </h1>
          <p className="mt-4 text-muted">
            Trabajamos por proyecto o de forma recurrente, según el tamaño y
            madurez de tu empresa. Cada servicio parte con un diagnóstico
            breve, sin costo, para dimensionar el alcance real.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <ServiceTabs />
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Siguiente paso"
        title="Partamos con un diagnóstico"
        description="Cuéntanos el tamaño de tu equipo y qué te preocupa hoy — te respondemos con un alcance y tiempos estimados, sin compromiso."
        ctaLabel="Ir a contacto"
      />
    </>
  );
}
