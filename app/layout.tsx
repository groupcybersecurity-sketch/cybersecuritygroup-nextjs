import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const siteUrl = "https://cybersecuritygroup.cl";
const title = "CyberSecurity Group | Ciberseguridad, GRC y Gestión de Riesgos";
const description =
  "Consultora especializada en ciberseguridad: auditorías, pentesting, GRC, respuesta a incidentes, capacitación y arquitectura de seguridad.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | CyberSecurity Group",
  },
  description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "CyberSecurity Group",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CyberSecurity Group" }],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  referrer: "strict-origin-when-cross-origin",
  verification: {
    google: "w5exBwTEM9MHQzFyw3EoLBBtYFgvrQL4yWIKi2vp9Cw",
  },
};

// Refuerzo de CSP a nivel de documento. GitHub Pages no permite configurar
// cabeceras HTTP reales (ver SECURITY.md) — esta meta-CSP es una capa
// adicional en el propio HTML, no un reemplazo de la cabecera real.
// 'unsafe-inline' es necesario en script-src porque Next.js inyecta un
// <script> inline por página (payload de hidratación __NEXT_DATA__) en
// un export estático — sin nonce/servidor no hay forma de evitarlo sin
// romper la hidratación de React. En style-src es por los estilos que
// Framer Motion aplica inline en tiempo de ejecución.
const CSP =
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data:; font-src 'self'; connect-src 'self' https://formspree.io https://cloudflare-dns.com; " +
  "object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io;";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CSP} />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-white">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
