"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Nota: formulario de UI. La conexión a un backend (Formspree u otro)
    // se define en una siguiente etapa.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-brand-cyan/30 bg-brand-cyan/10 p-8 text-center"
      >
        <p className="text-lg font-semibold text-white">
          Gracias, recibimos tu mensaje.
        </p>
        <p className="mt-2 text-sm text-muted">
          Te responderemos dentro de 1 día hábil.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Field label="Nombre completo" htmlFor="nombre">
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </Field>
      <Field label="Correo electrónico" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </Field>
      <Field label="Empresa (opcional)" htmlFor="empresa">
        <input id="empresa" name="empresa" type="text" className={inputClass} />
      </Field>
      <Field label="Servicio de interés" htmlFor="servicio">
        <select id="servicio" name="servicio" className={inputClass}>
          <option value="">Selecciona una opción</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="otro">Otro / no estoy seguro</option>
        </select>
      </Field>
      <Field label="Mensaje" htmlFor="mensaje">
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className={inputClass}
        />
      </Field>
      <p className="text-xs text-muted">
        Tus datos se usan solo para responder tu solicitud y no se comparten
        con terceros.
      </p>
      <button
        type="submit"
        className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,174,239,0.35)] transition-shadow hover:shadow-[0_16px_40px_rgba(0,174,239,0.5)]"
      >
        Enviar mensaje
      </button>
    </form>
  );
}

const inputClass =
  "rounded-lg border border-white/15 bg-panel px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan transition-colors";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
