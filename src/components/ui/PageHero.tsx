import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
};

/** Encabezado estándar para las páginas interiores. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="bg-cloud bg-brand-wash pt-14 pb-12 sm:pt-20 sm:pb-16">
      <Container>
        <Reveal className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-green-600">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
          {description ? (
            <p className="mt-5 text-lg text-muted">{description}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}
