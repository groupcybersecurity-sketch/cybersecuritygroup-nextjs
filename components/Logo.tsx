"use client";

import { motion } from "framer-motion";

export default function Logo({
  withWordmark = true,
  size = 32,
}: {
  withWordmark?: boolean;
  size?: number;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 group">
      <motion.svg
        width={size}
        height={(size * 56) / 48}
        viewBox="0 0 48 56"
        fill="none"
        whileHover={{ rotate: -6, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
      >
        <defs>
          <linearGradient id="shieldGrad" x1="4" y1="2" x2="44" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0033A0" />
            <stop offset="1" stopColor="#00AEEF" />
          </linearGradient>
        </defs>
        <path
          d="M24 2 L44 10 V26 C44 39 36 49 24 54 C12 49 4 39 4 26 V10 Z"
          fill="url(#shieldGrad)"
        />
        <path
          d="M15 27 L21 33 L34 18"
          stroke="#FFFFFF"
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      {withWordmark && (
        <span className="font-mono font-semibold tracking-tight text-white text-[1.05rem]">
          Cyber<span className="text-brand-cyan">Security</span> Group
        </span>
      )}
    </span>
  );
}
