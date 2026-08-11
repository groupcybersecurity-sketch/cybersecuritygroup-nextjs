import Hero from "@/components/Hero";
import Section, { Eyebrow, Reveal } from "@/components/Section";
import StatCounter from "@/components/StatCounter";
import ServiceCard from "@/components/ServiceCard";
import NewsCard from "@/components/NewsCard";
import CtaBand from "@/components/CtaBand";
import { services, stats, news } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="!py-14 border-b border-white/10">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Eyebrow>Nuestro enfoque</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Identificamos riesgos. Priorizamos acciones. Fortalecemos
            resiliencia.
          </h2>
          <p className="mt-4 text-muted">
            Combinamos tecnología, experiencia técnica y visión proactiva: la
            ciberseguridad no se trata solo de reaccionar, sino de prevenir,
            detectar y neutralizar amenazas antes de que ocurran.
          </p>
        </Reveal>
      </Section>

      <Section alt id="servicios">
        <Reveal className="max-w-2xl">
          <Eyebrow>Servicios</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Consultoría orientada a riesgo, resiliencia y cumplimiento
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Eyebrow>Noticias</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Últimas publicaciones
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <NewsCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="¿Listo para saber dónde está tu riesgo real?"
        description="Partamos con un diagnóstico breve, sin costo, para dimensionar el alcance correcto para tu organización."
      />
    </>
  );
}
