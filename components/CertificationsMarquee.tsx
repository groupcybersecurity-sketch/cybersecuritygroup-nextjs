"use client";

import { motion, useReducedMotion } from "framer-motion";

const certifications = [
  { acronym: "OSCP", name: "Offensive Security Certified Professional" },
  { acronym: "CEH", name: "Certified Ethical Hacker" },
  { acronym: "ISO 27001 LA", name: "Lead Auditor ISO/IEC 27001" },
  { acronym: "eJPT v2", name: "eLearnSecurity Junior Penetration Tester" },
  { acronym: "AZ-900", name: "Microsoft Azure Fundamentals" },
];

function CertBadge({ cert }: { cert: (typeof certifications)[number] }) {
  return (
    <div className="flex h-full w-56 flex-shrink-0 flex-col items-center rounded-2xl border border-white/10 bg-panel/80 p-6 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-brand-cyan/10 text-brand-cyan">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5" />
        </svg>
      </div>
      <p className="mt-3 font-mono text-sm font-semibold text-white">{cert.acronym}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{cert.name}</p>
    </div>
  );
}

export default function CertificationsMarquee() {
  const reduceMotion = useReducedMotion();
  const track = [...certifications, ...certifications];

  return (
    <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max gap-4"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 22, repeat: Infinity, ease: "linear" }
        }
      >
        {track.map((cert, i) => (
          <CertBadge key={`${cert.acronym}-${i}`} cert={cert} />
        ))}
      </motion.div>
    </div>
  );
}
