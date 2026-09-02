/**
 * Configuración global del sitio.
 *
 * Este archivo concentra TODO el contenido editable de nivel general
 * (marca, navegación, datos de contacto, redes). La idea es que para
 * actualizar el sitio no haga falta tocar componentes: solo este archivo
 * y los de la carpeta `src/content`.
 *
 * Los valores marcados como `[POR DEFINIR]` son placeholders: se deben
 * reemplazar cuando la empresa entregue la información real.
 */

export type NavItem = {
  label: string;
  href: string;
  /** Subsecciones opcionales para menús desplegables futuros. */
  children?: NavItem[];
};

export const site = {
  name: "Nexo Integral",
  legalName:
    "Servicios Integrales de Salud Mental, Psicología en Todas sus Áreas, Educación en General, Capacitación, Bienestar, Evaluación de Personas y Organizaciones Limitada",
  slogan: "Bienestar · Salud · Equilibrio",
  tagline: "Conectamos personas, bienestar y desarrollo.",
  description:
    "En Nexo Integral creemos en una mirada integral de las personas y las organizaciones, creando espacios de acompañamiento, aprendizaje y desarrollo.",
  country: "Chile",
  locale: "es_CL",

  /** URL pública. Se sobrescribe con NEXT_PUBLIC_SITE_URL en producción. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  logo: {
    src: "/images/logo-nexo-integral.png",
    alt: "Nexo Integral — Bienestar, Salud, Equilibrio",
    width: 428,
    height: 610,
  },

  /**
   * Datos de contacto. NO inventar: dejar en placeholder hasta recibir los reales.
   * Cuando existan, basta con completar aquí y el sitio los usará en Contacto,
   * Footer, botón de WhatsApp, enlaces mailto/tel, y Schema.org.
   */
  contact: {
    email: "" as string, // ej: "contacto@nexointegral.cl"
    phone: "" as string, // ej: "+56 2 2345 6789"
    whatsapp: "" as string, // solo dígitos con código país, ej: "56912345678"
    address: "" as string, // ej: "Av. Siempre Viva 123, Oficina 4, Santiago"
    mapsUrl: "" as string, // enlace a Google Maps
    scheduleNote: "[POR DEFINIR] Horario de atención",
  },

  social: {
    instagram: "" as string,
    facebook: "" as string,
    linkedin: "" as string,
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Personas", href: "/personas" },
    { label: "Organizaciones", href: "/organizaciones" },
    { label: "Equipo", href: "/equipo" },
    { label: "Contacto", href: "/contacto" },
  ] satisfies NavItem[],

  /** Enlace del botón destacado (CTA principal del header). */
  primaryCta: { label: "Agenda / Contáctanos", href: "/contacto" },

  footerLinks: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Personas", href: "/personas" },
    { label: "Organizaciones", href: "/organizaciones" },
    { label: "Equipo", href: "/equipo" },
    { label: "Contacto", href: "/contacto" },
  ] satisfies NavItem[],

  legalLinks: [
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Términos y Condiciones", href: "/terminos" },
  ] satisfies NavItem[],
} as const;

export type Site = typeof site;

/** Devuelve true si hay un dato de contacto real configurado. */
export const hasContact = {
  email: () => site.contact.email.trim().length > 0,
  phone: () => site.contact.phone.trim().length > 0,
  whatsapp: () => site.contact.whatsapp.trim().length > 0,
  address: () => site.contact.address.trim().length > 0,
};
