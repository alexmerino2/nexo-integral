import type { SVGProps } from "react";
import type { IconName } from "@/types";

/**
 * Set de iconos en línea (SVG, sin dependencias externas).
 * Trazo de 1.75, estilo redondeado, para acompañar un tono cálido.
 * Añade nuevos iconos agregando una entrada a `paths` y a `IconName`.
 */
const paths: Record<IconName, React.ReactNode> = {
  heart: (
    <path d="M19.5 12.6 12 20l-7.5-7.4a4.6 4.6 0 0 1 6.5-6.5l1 1 1-1a4.6 4.6 0 0 1 6.5 6.5Z" />
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 19 3 20 4s-1 4.5-2.1 10.2A7 7 0 0 1 4 15" />
      <path d="M4 20c2-5.5 6-9.5 12-12" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5 2.5 2.5 0 0 0 5 9a2.5 2.5 0 0 0 .5 4.9V15a3 3 0 0 0 4 2.8V4Z" />
      <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5 2.5 2.5 0 0 1 19 9a2.5 2.5 0 0 1-.5 4.9V15a3 3 0 0 1-4 2.8V4Z" />
    </>
  ),
  users: (
    <>
      <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" />
      <circle cx="10" cy="8" r="3.2" />
      <path d="M15.5 5.2a3.2 3.2 0 0 1 0 5.6M20 19v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
    </>
  ),
  graduation: (
    <>
      <path d="m12 5 9 4-9 4-9-4 9-4Z" />
      <path d="M6 11v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V11" />
      <path d="M21 9v5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2.2" />
      <path d="M9 4.5a3 3 0 0 1 6 0M8.5 11h7M8.5 15h5" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="1.6" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4.5 13.6 9 18 10.5 13.6 12 12 16.5 10.4 12 6 10.5 10.4 9 12 4.5Z" />
      <path d="M18.5 15.5 19.2 17.5 21 18l-1.8.5-.7 2-.7-2L16 18l1.8-.5.7-2Z" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 12 3-3 4.5 4.5a2 2 0 0 0 2.8 0L21 6" />
      <path d="m21 12-3 3-3-3M8 15l2 2a2 2 0 0 0 3 0" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3.5v4M15 3.5v4" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  phone: (
    <path d="M6.5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.7 2 2 0 0 1 6.5 4.5Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-4.1A8 8 0 1 1 8 18.5L4 20Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5 1-1l-.3-1.3-1.6-.5-.8.9a4.4 4.4 0 0 1-2-2l.9-.8-.5-1.6L9.9 8.5c-.5 0-.9.4-.9 1Z" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21c4-4.5 7-7.8 7-11a7 7 0 1 0-14 0c0 3.2 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14.5 8.5H16V5.7c-.4-.05-1.3-.2-2.3-.2-2.3 0-3.8 1.4-3.8 4v2.2H7.5v3h2.4V21h3v-6.3h2.4l.4-3h-2.8V9.8c0-.9.25-1.3 1.1-1.3Z" />
  ),
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8 10.5V17M8 7.6v.1M11.5 17v-3.6c0-1.2.8-2 1.9-2s1.9.8 1.9 2V17M11.5 10.5V17" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5c0 4.2-2.8 7.7-7 9-4.2-1.3-7-4.8-7-9V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  /** Tamaño en px (ancho y alto). Por defecto 24. */
  size?: number;
  /** Etiqueta accesible. Si se omite, el icono es decorativo (aria-hidden). */
  title?: string;
};

export function Icon({ name, size = 24, title, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
