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
        height={size}
        viewBox="-90 -90 180 180"
        fill="none"
        whileHover={{ rotate: 18, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
      >
        <defs>
          <linearGradient id="ringOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00AEEF" />
            <stop offset="100%" stopColor="#0033A0" />
          </linearGradient>
          <linearGradient id="ringInner" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0033A0" />
            <stop offset="100%" stopColor="#00AEEF" />
          </linearGradient>
        </defs>
        <path
          d="M 0,-72 A 72,72 0 1 1 -62.35,-37.18"
          stroke="url(#ringOuter)"
          strokeWidth={12}
          strokeLinecap="round"
        />
        <path
          d="M 13.5,-51.8 A 51.8,51.8 0 1 0 -13.5,51.8"
          stroke="url(#ringInner)"
          strokeWidth={10}
          strokeLinecap="round"
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
