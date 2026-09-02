/**
 * Mapa de acentos de la marca a clases de Tailwind.
 * Centralizado para que las tarjetas, iconos y badges sean coherentes
 * y para no repetir combinaciones de color por todo el código.
 */
export type Accent = "blue" | "green" | "orange" | "ink";

export const accentClasses: Record<
  Accent,
  { chip: string; iconWrap: string; bar: string; text: string; hoverRing: string }
> = {
  blue: {
    chip: "bg-blue-100 text-blue-600",
    iconWrap: "bg-blue-100 text-blue-600",
    bar: "bg-blue",
    text: "text-blue-600",
    hoverRing: "hover:ring-blue/40",
  },
  green: {
    chip: "bg-green-100 text-green-600",
    iconWrap: "bg-green-100 text-green-600",
    bar: "bg-green",
    text: "text-green-600",
    hoverRing: "hover:ring-green/40",
  },
  orange: {
    chip: "bg-orange-100 text-orange-600",
    iconWrap: "bg-orange-100 text-orange-600",
    bar: "bg-orange",
    text: "text-orange-600",
    hoverRing: "hover:ring-orange/40",
  },
  ink: {
    chip: "bg-sand-100 text-ink",
    iconWrap: "bg-sand-100 text-ink",
    bar: "bg-ink",
    text: "text-ink",
    hoverRing: "hover:ring-ink/30",
  },
};
