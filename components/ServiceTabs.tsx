"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services, serviceCategories, type ServiceCategory } from "@/lib/content";
import ServiceCard from "./ServiceCard";

export default function ServiceTabs() {
  const [active, setActive] = useState<ServiceCategory | "Todos">("Todos");
  const filtered =
    active === "Todos" ? services : services.filter((s) => s.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["Todos", ...serviceCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white"
                : "border border-white/15 text-white/70 hover:border-brand-cyan/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
