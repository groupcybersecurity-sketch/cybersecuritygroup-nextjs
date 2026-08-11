"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { NewsPost } from "@/lib/content";

export default function NewsCard({ post }: { post: NewsPost }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col rounded-2xl border border-white/10 bg-panel/80 p-6"
    >
      <span className="font-mono text-xs text-brand-cyan-soft">
        {post.date} · {post.category}
      </span>
      <h3 className="mt-3 text-base font-semibold leading-snug text-white">
        <Link href={`/noticias/${post.slug}`} className="hover:text-brand-cyan">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <Link
        href={`/noticias/${post.slug}`}
        className="mt-4 text-sm font-medium text-brand-cyan hover:underline"
      >
        Leer más →
      </Link>
    </motion.article>
  );
}
