import type { Metadata } from "next";
import Section, { Eyebrow, Reveal } from "@/components/Section";
import DomainChecker from "@/components/DomainChecker";

export const metadata: Metadata = {
  title: "Verificador SPF, DKIM y DMARC | CyberSecurity Group",
  description:
    "Revisa gratis si el dominio de tu empresa está protegido contra la suplantación de correo (spoofing): verificación en vivo de SPF, DKIM y DMARC.",
};

export default function VerificadorPage() {
  return (
    <Section>
      <Reveal className="max-w-2xl">
        <Eyebrow>Herramienta gratuita</Eyebrow>
        <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
          Verificador SPF, DKIM y DMARC
        </h1>
        <p className="mt-4 text-muted">
          Ingresa el dominio de tu empresa y revisamos en vivo si está
          protegido contra correos falsificados en su nombre (spoofing) —
          uno de los vectores de phishing más comunes. La consulta se hace en
          tu navegador, sin guardar ningún dato.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <DomainChecker />
      </Reveal>
    </Section>
  );
}
