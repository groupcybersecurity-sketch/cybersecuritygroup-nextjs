import Section, { Eyebrow, Reveal } from "./Section";
import Button from "./Button";

export default function CtaBand({
  eyebrow = "Hablemos",
  title,
  description,
  ctaLabel = "Solicitar una evaluación",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
}) {
  return (
    <Section className="!py-20 text-center relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(0,174,239,0.22), transparent 60%)",
        }}
      />
      <Reveal className="mx-auto max-w-2xl">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mt-4 text-muted">{description}</p>
        <div className="mt-8 flex justify-center">
          <Button href="/contacto">{ctaLabel}</Button>
        </div>
      </Reveal>
    </Section>
  );
}
