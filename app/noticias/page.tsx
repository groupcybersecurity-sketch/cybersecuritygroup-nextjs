import type { Metadata } from "next";
import Section, { Eyebrow, Reveal } from "@/components/Section";
import NewsCard from "@/components/NewsCard";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "Noticias | CyberSecurity Group",
  description: "Artículos y noticias de CyberSecurity Group.",
};

export default function NoticiasPage() {
  return (
    <Section>
      <Reveal className="max-w-2xl">
        <Eyebrow>Noticias</Eyebrow>
        <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
          Blog y noticias
        </h1>
        <p className="mt-4 text-muted">
          Análisis, hallazgos y contexto regulatorio, escrito por el equipo
          que hace el trabajo.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {news.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <NewsCard post={post} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
