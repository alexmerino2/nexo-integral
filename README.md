# Nexo Integral — Sitio web (estático)

Sitio institucional de **Nexo Integral** · *Bienestar · Salud · Equilibrio*.

Primera versión **100% estática**: `next build` genera HTML/CSS/JS en la carpeta
`out/`, que se publica en cualquier hosting estático (Netlify, GitHub Pages,
Cloudflare Pages, Vercel, un bucket S3, Apache/Nginx…). **No requiere Node en
producción.**

El contenido de empresa que aún no está confirmado aparece como `[POR DEFINIR]`
o como contenido de ejemplo claramente marcado.

## Tecnología

| Área | Elección | Por qué |
|---|---|---|
| Generador | **Next.js 15** con `output: "export"` | Componentes reutilizables + salida estática; base lista para reactivar funciones de servidor cuando se necesiten |
| Lenguaje | **TypeScript** | Mantenibilidad y contenido tipado |
| Estilos | **Tailwind CSS v4** | Sistema de diseño con tokens de marca en `globals.css` |
| Formulario | Validación con **Zod** en el navegador + envío por `mailto:` | Funciona sin backend; el envío automático se puede añadir después como módulo |
| Iconos / animación | SVG en línea + IntersectionObserver | Sin librerías extra; animaciones sutiles con `prefers-reduced-motion` |

## Puesta en marcha

```bash
npm install
npm run dev            # desarrollo → http://localhost:3000
npm run build          # genera el sitio estático en ./out
npm run preview        # sirve ./out localmente para revisarlo
```

Publicar = subir el contenido de `out/` al hosting. En Netlify/Vercel: build
command `npm run build`, directorio de publicación `out`.

## Dónde editar el contenido

Todo el contenido editable vive en `src/content/`:

| Archivo | Qué controla |
|---|---|
| `site.ts` | Marca, navegación, **datos de contacto**, redes, enlaces legales |
| `services.ts` | Tarjetas de servicios y "pilares" de la marca |
| `team.ts` | Fichas del equipo (hoy con ejemplos `placeholder: true`) |
| `faqs.ts` | Preguntas frecuentes |

Al completar `site.contact` / `site.social` en `src/content/site.ts`, el sitio
activa automáticamente: el botón flotante de WhatsApp, los enlaces `mailto:` /
`tel:`, el mapa de Google Maps, el envío real del formulario por correo y los
datos Schema.org.

## Estructura

```
src/
  app/                 Rutas (App Router) + sitemap/robots  → se exportan a HTML
  components/
    layout/            Navbar, Footer, botón flotante de WhatsApp
    ui/                 Button, Card, Section, Icon, Reveal, PageHero, FaqAccordion…
    home/              Secciones de la portada
    services/  team/  contact/   Bloques por dominio
  content/             ⬅️ Contenido editable (ver tabla)
  lib/                 seo, accents, validación del formulario
  types/               Tipos compartidos
public/images/         Logo oficial + fotos temporales (ver CREDITS.md)
out/                   Salida del build (generada; no se versiona)
```

## Accesibilidad y SEO

- HTML semántico, jerarquía `h1/h2/h3`, `aria-*` en menús y formulario,
  foco visible, "saltar al contenido", `prefers-reduced-motion`.
- Metadata por página, Open Graph/Twitter, `sitemap.xml`, `robots.txt`,
  JSON-LD de organización, favicon a partir del logo.

## Preparado para crecer (módulos futuros)

La arquitectura permite incorporar, sin reescribir la base:

- **Envío del formulario por servidor** (SMTP o servicio de formularios):
  reemplazar el `mailto:` de `src/components/contact/ContactForm.tsx` por un
  `fetch()`; si se necesita una API propia, quitar `output: "export"` y añadir
  `src/app/api/contact/route.ts`.
- Blog / artículos, testimonios, FAQ ampliada, agenda de reservas
  (servicio → profesional → fecha → hora), pagos, área privada, CMS headless.

## Pendientes de la empresa (`[POR DEFINIR]`)

Profesionales reales, servicios en detalle, precios, horarios, modalidades,
correo / teléfono / WhatsApp / dirección, redes sociales y textos legales
definitivos.
