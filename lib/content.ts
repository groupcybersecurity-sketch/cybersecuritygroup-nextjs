export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Auditorías de seguridad", href: "/servicios#auditorias" },
      { label: "Pentesting / hacking ético", href: "/servicios#pentesting" },
      { label: "Consultoría GRC", href: "/servicios#grc" },
      { label: "Respuesta a incidentes", href: "/servicios#incidentes" },
      { label: "Capacitación", href: "/servicios#capacitacion" },
      { label: "Arquitectura de seguridad", href: "/servicios#arquitectura" },
    ],
  },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];

export type ServiceCategory =
  | "Gestionados"
  | "Consultoría"
  | "Soluciones"
  | "Capacitación";

export interface Service {
  slug: string;
  id: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  status: string;
  partnerSlug?: string;
}

export const services: Service[] = [
  {
    slug: "auditorias",
    id: "auditorias",
    title: "Auditorías de seguridad",
    category: "Consultoría",
    summary:
      "Evaluamos infraestructura, aplicaciones y procesos frente a marcos como ISO 27001 y NIST, con hallazgos priorizados por riesgo real de negocio.",
    description:
      "Evaluamos infraestructura on-premise y en la nube, aplicaciones y procesos internos frente a marcos de referencia como ISO 27001, NIST CSF y CIS Controls. El resultado es un informe con hallazgos clasificados por severidad y riesgo de negocio, no solo por criticidad técnica.",
    status: "Evaluación continua",
  },
  {
    slug: "pentesting",
    id: "pentesting",
    title: "Pentesting / hacking ético",
    category: "Soluciones",
    summary:
      "Explotación controlada de redes, aplicaciones web y APIs para demostrar el impacto real de una vulnerabilidad, no solo su existencia.",
    description:
      "Pruebas de penetración en redes internas y externas, aplicaciones web, APIs y aplicaciones móviles. Simulamos ataques reales bajo un alcance y ventana de tiempo acordados, y como parte de nuestra metodología incorporamos Offensive para ampliar la cobertura de pruebas y acelerar la detección de vulnerabilidades. Todo hallazgo lo valida nuestro equipo y se documenta con evidencia reproducible y una propuesta concreta de remediación.",
    status: "Explotación controlada",
    partnerSlug: "offensive",
  },
  {
    slug: "grc",
    id: "grc",
    title: "Consultoría GRC",
    category: "Consultoría",
    summary:
      "Gobernanza, riesgo y cumplimiento: políticas, matrices de riesgo y acompañamiento en certificaciones y normativas del sector.",
    description:
      "Diseño y actualización de políticas de seguridad, matrices de riesgo, planes de continuidad operativa y acompañamiento en procesos de certificación o cumplimiento normativo, incluida la Ley Marco de Ciberseguridad.",
    status: "Gobernanza activa",
  },
  {
    slug: "incidentes",
    id: "incidentes",
    title: "Respuesta a incidentes",
    category: "Gestionados",
    summary:
      "Contención, análisis forense y recuperación cuando algo ya ocurrió, con un informe claro para directorio y equipo técnico.",
    description:
      "Contención y análisis forense ante brechas, ransomware o accesos no autorizados. Reconstruimos la línea de tiempo del incidente, identificamos el vector de entrada y entregamos un plan de recuperación y endurecimiento.",
    status: "Disponible 24/7",
  },
  {
    slug: "capacitacion",
    id: "capacitacion",
    title: "Capacitación en ciberseguridad",
    category: "Capacitación",
    summary:
      "Talleres para equipos técnicos y no técnicos: de phishing a buenas prácticas de desarrollo seguro.",
    description:
      "Talleres prácticos para equipos técnicos (desarrollo seguro, OWASP Top 10) y para el resto de la organización (phishing, contraseñas, manejo de información sensible), con simulacros y métricas de mejora en el tiempo.",
    status: "Cultura reforzada",
  },
  {
    slug: "arquitectura",
    id: "arquitectura",
    title: "Arquitectura de seguridad",
    category: "Soluciones",
    summary:
      "Diseño y evaluación de arquitecturas alineadas a objetivos de negocio, cumplimiento regulatorio y marcos internacionales.",
    description:
      "Diseño y evaluación de arquitecturas de red, aplicaciones y nube alineadas a objetivos de negocio, cumplimiento regulatorio y marcos internacionales de seguridad, con foco en segmentación, gestión de identidades y security by design.",
    status: "Diseño seguro",
  },
];

export interface Partner {
  slug: string;
  name: string;
  role: string;
  logo: string;
  description: string;
}

export const partners: Partner[] = [
  {
    slug: "offensive",
    name: "Offensive",
    role: "Pentesting / hacking ético",
    logo: "/partners/offensive-logo.png",
    description:
      "Plataforma que integramos en nuestra metodología de pentesting para ampliar la cobertura de pruebas y acelerar la detección de vulnerabilidades. Cada hallazgo lo valida y prioriza nuestro equipo antes de llegar al informe final.",
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Gestionados",
  "Consultoría",
  "Soluciones",
  "Capacitación",
];

export const stats = [
  { value: 6, suffix: "", label: "Servicios especializados" },
  { value: 3, suffix: "", label: "Marcos de referencia (ISO 27001, NIST, OWASP)" },
  { value: 24, suffix: "/7", label: "Disponibilidad para incidentes" },
  { value: 100, suffix: "%", label: "Confidencialidad garantizada" },
];

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
}

export const news: NewsPost[] = [
  {
    slug: "desarrollo-seguro",
    title:
      "Desarrollo seguro: las 5 fallas que más vemos en auditorías a código en Chile",
    date: "15 jul 2026",
    category: "Desarrollo seguro",
    excerpt:
      "Después de auditar decenas de aplicaciones web de empresas chilenas, hay un patrón que se repite: las vulnerabilidades más costosas casi nunca son sofisticadas.",
    body: [
      "Después de auditar decenas de aplicaciones web de empresas chilenas —desde startups hasta compañías con años en el mercado— hay un patrón que se repite: las vulnerabilidades más costosas casi nunca son sofisticadas. Son errores conocidos, documentados hace años, que simplemente no se revisaron antes de salir a producción.",
      "Validación de entradas solo en el frontend, uso de innerHTML con datos no confiables, secretos en el código fuente, falta de cabeceras de seguridad HTTP y dependencias desactualizadas siguen siendo, en ese orden, las fallas más frecuentes.",
      "Ninguna de estas fallas requiere un atacante avanzado. Por eso nuestras auditorías de código ponen tanto énfasis en revisar lo básico primero: es ahí donde vive la mayor parte del riesgo real.",
    ],
  },
  {
    slug: "ley-marco-ciberseguridad",
    title: "Ley Marco de Ciberseguridad: qué implica para tu empresa",
    date: "2026",
    category: "Cumplimiento",
    excerpt:
      "Desde marzo de 2025 rigen los artículos clave de la Ley 21.663. Si tu empresa depende de sus sistemas informáticos para operar, es momento de entender qué exige realmente esta norma.",
    body: [
      "Desde marzo de 2025 rigen los artículos clave de la Ley 21.663, conocida como Ley Marco de Ciberseguridad, y la fiscalización real se ha ido intensificando durante 2026. Si tu empresa depende de sus sistemas informáticos para operar —y en la práctica eso describe a casi cualquier negocio hoy— es momento de entender qué exige realmente esta norma.",
      "La ley clasifica a las organizaciones según su criticidad y define obligaciones distintas para cada nivel: desde reportar incidentes dentro de plazos acotados hasta mantener planes de continuidad operativa auditables.",
      "Te ayudamos a interpretar la norma para tu caso específico y a priorizar qué corresponde cumplir primero, en vez de intentar abordarlo todo a la vez.",
    ],
  },
  {
    slug: "phishing-dirigido",
    title:
      "Phishing dirigido: por qué los simulacros internos cambian el comportamiento",
    date: "2026",
    category: "Capacitación y cultura de seguridad",
    excerpt:
      "El phishing sigue siendo la puerta de entrada más común para un incidente de seguridad — no porque las defensas técnicas fallen, sino porque basta un clic.",
    body: [
      "El phishing sigue siendo, año tras año, la puerta de entrada más común para un incidente de seguridad — no porque las defensas técnicas fallen, sino porque basta con que una persona haga clic una vez. La buena noticia es que el comportamiento humano frente al phishing sí se puede entrenar, pero no de cualquier forma.",
      "Los simulacros genéricos, enviados una vez al año, tienen un efecto casi nulo. Lo que sí funciona son simulacros dirigidos, con contexto realista para cada equipo, y retroalimentación inmediata para quien hace clic.",
      "Diseñamos programas de simulacros con métricas de mejora real en el tiempo, no solo un reporte de cuántas personas cayeron una vez.",
    ],
  },
];
