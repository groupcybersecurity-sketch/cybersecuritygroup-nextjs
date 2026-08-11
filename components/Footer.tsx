import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[34ch] text-sm text-muted">
              Consultoría especializada en ciberseguridad, gestión de riesgos y
              cumplimiento para organizaciones que necesitan decisiones
              basadas en evidencia.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted">
              Sitio
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/servicios" className="text-white/75 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="text-white/75 hover:text-white">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-white/75 hover:text-white">
                  Noticias
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted">
              Contacto
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/contacto" className="text-white/75 hover:text-white">
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted">
          <span>© 2026 CyberSecurity Group. Todos los derechos reservados.</span>
          <nav className="flex gap-4">
            <Link href="/servicios" className="hover:text-white">
              Servicios
            </Link>
            <Link href="/quienes-somos" className="hover:text-white">
              Nosotros
            </Link>
            <Link href="/contacto" className="hover:text-white">
              Contacto
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-white">
              Política de privacidad
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
