# Seguridad de este proyecto

CyberSecurity Group — sitio corporativo (Next.js, exportado como estático, publicado en GitHub Pages).

## Arquitectura y su implicancia de seguridad

Este sitio se compila con `output: "export"`: no hay servidor Node en producción, solo archivos estáticos servidos por GitHub Pages. Consecuencias directas:

- **No existen secretos del lado del servidor.** Cualquier variable de entorno usada en el código (prefijo `NEXT_PUBLIC_` o no) termina compilada en el HTML/JS público. No pegar API keys privadas, tokens de servicio ni credenciales en este repositorio ni en `.env.local` esperando que el build las oculte — no lo hace.
- Si en el futuro se necesita una integración con un secreto real (por ejemplo, una API key de un proveedor que no deba exponerse), debe implementarse fuera de este repo: una función serverless (Cloudflare Worker, Vercel Function, etc.) que actúe de intermediario y nunca entregue el secreto al navegador.
- **Cabeceras HTTP de seguridad reales (CSP, HSTS, X-Frame-Options) no se pueden configurar desde GitHub Pages.** Se agregó una CSP vía `<meta http-equiv>` en `app/layout.tsx` como capa adicional, pero tiene limitaciones (no soporta `frame-ancestors`, no bloquea tan estrictamente como una cabecera real). Las cabeceras reales se configuran a nivel de Cloudflare (Transform Rules), que está delante del dominio.

## Manejo de variables de entorno

- `.env*` está en `.gitignore` — nunca se commitea.
- Usar `.env.example` como plantilla de qué variables existen, sin valores reales.
- Solo prefijar con `NEXT_PUBLIC_` los valores que están diseñados para ser públicos (IDs de formularios, site-keys de reCAPTCHA, Measurement IDs de analytics, etc.).

## Formularios

- El formulario de contacto (`components/ContactForm.tsx`) incluye honeypot (campo oculto) y control de tiempo mínimo de llenado como primera barrera anti-spam del lado del cliente.
- Esta validación **no reemplaza** validación server-side: cuando se conecte a un proveedor real (Formspree u otro), ese proveedor debe aplicar su propia validación/rate-limiting.

## Dependencias

- Dependabot está configurado (`.github/dependabot.yml`) para alertar semanalmente sobre actualizaciones de paquetes npm y GitHub Actions.
- Correr `npm audit` antes de cada release o al agregar una dependencia nueva.

## Reportar una vulnerabilidad

Si encuentras un problema de seguridad en este sitio, contáctanos a través del formulario en [cybersecuritygroup.cl/contacto](https://cybersecuritygroup.cl/contacto) o por WhatsApp desde el sitio, describiendo el hallazgo con el detalle suficiente para reproducirlo.
