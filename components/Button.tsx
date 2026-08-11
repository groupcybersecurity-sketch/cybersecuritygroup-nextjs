"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-shadow";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-[0_10px_30px_rgba(0,174,239,0.35)] hover:shadow-[0_16px_40px_rgba(0,174,239,0.5)]"
      : "border border-white/25 text-white hover:border-brand-cyan/70";

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className="inline-block">
      {content}
    </button>
  );
}
