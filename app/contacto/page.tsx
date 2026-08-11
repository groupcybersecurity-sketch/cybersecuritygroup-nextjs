import type { Metadata } from "next";
import Section, { Eyebrow, Reveal } from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | CyberSecurity Group",
  description: "Contáctanos para agendar un diagnóstico de ciberseguridad sin costo.",
};

export default function ContactoPage() {
  return (
    <Section>
      <Reveal className="max-w-2xl">
        <Eyebrow>Iniciar un caso</Eyebrow>
        <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
          Contacto
        </h1>
        <p className="mt-4 text-muted">
          Cuéntanos brevemente tu situación. Respondemos dentro de 1 día
          hábil con próximos pasos y, si corresponde, una propuesta de
          alcance.
        </p>
      </Reveal>
      <Reveal className="mt-10 max-w-xl" delay={0.1}>
        <ContactForm />
      </Reveal>
    </Section>
  );
}
