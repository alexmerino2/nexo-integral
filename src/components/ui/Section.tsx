import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  containerSize?: "default" | "prose" | "wide";
  /** Fondo de la sección. */
  tone?: "sand" | "white" | "wash" | "ink";
  /** Espaciado vertical. */
  spacing?: "normal" | "compact" | "loose";
};

const tones = {
  sand: "bg-sand",
  white: "bg-cloud",
  wash: "bg-cloud bg-brand-wash",
  ink: "bg-forest text-sand",
};

const spacings = {
  compact: "py-12 sm:py-16",
  normal: "py-16 sm:py-24",
  loose: "py-20 sm:py-32",
};

export function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  containerSize = "default",
  tone = "sand",
  spacing = "normal",
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} ${spacings[spacing]} ${className}`}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
