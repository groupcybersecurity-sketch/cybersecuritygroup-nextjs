"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, animate } from "framer-motion";

export default function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (reduceMotion) {
        setDisplay(value);
        return;
      }
      animate(0, value, {
        duration: 1.1,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
    };

    if (!("IntersectionObserver" in window)) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduceMotion]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-soft"
      >
        {display}
        {suffix}
      </span>
      <span className="mt-2 block text-sm text-muted">{label}</span>
    </div>
  );
}
