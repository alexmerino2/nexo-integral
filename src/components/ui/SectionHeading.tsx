import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Nivel del encabezado para mantener jerarquía correcta. */
  as?: "h2" | "h3";
  tone?: "default" | "onInk";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  tone = "default",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const descColor = tone === "onInk" ? "text-sand/80" : "text-muted";
  const eyebrowColor = tone === "onInk" ? "text-green-100" : "text-green-600";
  const titleColor = tone === "onInk" ? "text-white" : "";

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.14em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag className={`text-3xl sm:text-4xl font-bold ${titleColor}`}>{title}</Tag>
      {description ? (
        <p className={`mt-4 text-lg ${descColor}`}>{description}</p>
      ) : null}
    </Reveal>
  );
}
