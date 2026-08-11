import type { Metadata } from "next";
import Section, { Eyebrow, Reveal } from "@/components/Section";
import CtaBand from "@/components/CtaBand";

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

      <Section alt>
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

      <CtaBand
        title="¿Listo para saber dónde está tu riesgo real?"
        description="Partamos con un diagnóstico breve, sin costo, para entender el alcance correcto para tu organización."
      />
    </>
  );
}
