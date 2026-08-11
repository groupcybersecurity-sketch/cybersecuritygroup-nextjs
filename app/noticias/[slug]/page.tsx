import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section, { Reveal } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { news } from "@/lib/content";

export function generateStaticParams() {
  return news.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = news.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | CyberSecurity Group`,
    description: post.excerpt,
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = news.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Section>
        <Reveal className="mx-auto max-w-2xl">
          <Link
            href="/noticias"
            className="text-sm text-brand-cyan-soft hover:underline"
          >
            ← Volver a noticias
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-brand-cyan-soft">
            {post.date} · {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-8 flex flex-col gap-5 text-[1.05rem] leading-relaxed text-white/85">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="¿Y tu organización?"
        title="Convierte esto en un diagnóstico propio"
        description="Te contamos qué tan expuesta está tu empresa a los riesgos que describimos aquí, sin costo ni compromiso."
      />
    </>
  );
}
