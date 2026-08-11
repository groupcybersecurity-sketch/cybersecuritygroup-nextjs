import type { Metadata } from "next";
import Section, { Reveal } from "@/components/Section";

export const metadata: Metadata = {
  title: "Política de privacidad | CyberSecurity Group",
  description:
    "Cómo CyberSecurity Group recopila, usa y protege los datos personales entregados a través de este sitio.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan-soft">
          Última actualización: 11 de agosto de 2026
        </p>
        <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Política de privacidad
        </h1>

        <div className="mt-8 flex flex-col gap-6 text-[1.05rem] leading-relaxed text-white/85">
          <p>
            Esta política explica qué datos personales recopila
            CyberSecurity Group a través de{" "}
            <span className="text-white">cybersecuritygroup.cl</span>, para
            qué se usan y qué derechos tienes sobre ellos, en línea con la
            Ley N° 19.628 sobre Protección de la Vida Privada.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white">
              1. Qué datos recopilamos
            </h2>
            <p className="mt-3">
              Solo recopilamos los datos que ingresas voluntariamente en el
              formulario de contacto: nombre, correo electrónico, empresa
              (opcional), servicio de interés y el mensaje que escribes. No
              usamos cookies de seguimiento ni herramientas de analítica en
              este sitio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              2. Para qué los usamos
            </h2>
            <p className="mt-3">
              Exclusivamente para responder tu solicitud de contacto y dar
              seguimiento a la conversación comercial que inicias con
              nosotros. No usamos tus datos para enviarte marketing sin tu
              consentimiento explícito, ni los usamos para ningún fin
              distinto al que motivó el contacto.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              3. Con quién se comparten
            </h2>
            <p className="mt-3">
              El formulario de contacto se procesa a través de{" "}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cyan-soft hover:underline"
              >
                Formspree
              </a>
              , un proveedor externo que actúa como intermediario técnico
              para que el mensaje nos llegue por correo. No vendemos,
              arrendamos ni compartimos tus datos con terceros para fines
              publicitarios o comerciales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              4. Cuánto tiempo los conservamos
            </h2>
            <p className="mt-3">
              Conservamos los mensajes de contacto solo mientras sea
              necesario para atender tu solicitud y, si se concreta una
              relación comercial, durante esa relación. Puedes solicitar la
              eliminación de tus datos en cualquier momento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              5. Tus derechos
            </h2>
            <p className="mt-3">
              Puedes solicitar acceso, rectificación, cancelación u
              oposición (derechos ARCO) sobre tus datos personales
              escribiéndonos a través del{" "}
              <a
                href="/contacto"
                className="text-brand-cyan-soft hover:underline"
              >
                formulario de contacto
              </a>
              . Responderemos dentro de un plazo razonable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              6. Seguridad
            </h2>
            <p className="mt-3">
              Este sitio aplica buenas prácticas de desarrollo seguro
              (cabeceras de seguridad HTTP, política de seguridad de
              contenido, protección anti-spam en formularios) para reducir
              el riesgo de exposición de la información que nos entregas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              7. Cambios a esta política
            </h2>
            <p className="mt-3">
              Si actualizamos esta política, la fecha de "Última
              actualización" en la parte superior de esta página va a
              reflejar el cambio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Contacto</h2>
            <p className="mt-3">
              Para cualquier consulta sobre esta política o sobre tus
              datos, escríbenos a través del{" "}
              <a
                href="/contacto"
                className="text-brand-cyan-soft hover:underline"
              >
                formulario de contacto
              </a>
              .
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
