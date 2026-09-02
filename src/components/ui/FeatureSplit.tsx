import { Img as Image } from "@/components/ui/Img";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type FeatureSplitProps = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  /** Coloca la imagen a la derecha (por defecto) o a la izquierda. */
  imageSide?: "left" | "right";
  tone?: "sand" | "white";
};

export function FeatureSplit({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  imageSide = "right",
  tone = "white",
}: FeatureSplitProps) {
  return (
    <section className={tone === "sand" ? "bg-sand py-16 sm:py-20" : "bg-cloud py-16 sm:py-20"}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className={imageSide === "left" ? "lg:order-2" : ""}>
            {eyebrow ? (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-blue">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <div className="mt-5 space-y-4 text-lg text-muted">{children}</div>
          </Reveal>

          <Reveal
            delay={120}
            className={imageSide === "left" ? "lg:order-1" : ""}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-sand-200">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
