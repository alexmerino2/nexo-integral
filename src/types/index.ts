import type { ComponentType, SVGProps } from "react";

/** Nombre de icono disponible en el componente <Icon />. */
export type IconName =
  | "heart"
  | "leaf"
  | "brain"
  | "users"
  | "graduation"
  | "clipboard"
  | "building"
  | "sparkles"
  | "handshake"
  | "compass"
  | "calendar"
  | "arrow-right"
  | "check"
  | "phone"
  | "mail"
  | "whatsapp"
  | "map-pin"
  | "menu"
  | "close"
  | "chevron-down"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "shield";

export type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

/** Categoría de servicio (tarjeta en /servicios y en Home). */
export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  /** Texto corto para las tarjetas. */
  summary: string;
  /** A quién está dirigido principalmente. */
  audience: Array<"personas" | "organizaciones">;
  /** Acento de color de la marca para la tarjeta. */
  accent: "blue" | "green" | "orange" | "ink";
  /** Contenido extendido (se muestra en la página de servicios). */
  details?: string[];
};

/** Integrante del equipo. Estructura lista para poblarse a futuro. */
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  specialty?: string;
  bio?: string;
  education?: string[];
  services?: string[];
  photo?: string;
  /** Marca el registro como contenido de ejemplo / temporal. */
  placeholder?: boolean;
};

/** Pregunta frecuente. */
export type Faq = {
  question: string;
  answer: string;
};

/** Bloque genérico "pilar" (Salud, Bienestar, Desarrollo, Educación, Conexión). */
export type Pillar = {
  title: string;
  description: string;
  icon: IconName;
  accent: "blue" | "green" | "orange" | "ink";
};
