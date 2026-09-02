import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServicesGrid } from "@/components/services/ServicesGrid";

export function ServicesPreview() {
  return (
    <Section tone="wash" id="servicios">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Áreas en las que acompañamos"
          description="Reunimos profesionales y programas en distintas áreas de bienestar, educación y desarrollo, creando un espacio donde puedas encontrar alternativas y conexiones que hagan sentido para ti."
        />
        <Button
          href="/servicios"
          variant="secondary"
          trailingIcon="arrow-right"
          className="shrink-0"
        >
          Ver todos los servicios
        </Button>
      </div>
      <div className="mt-12">
        <ServicesGrid />
      </div>
    </Section>
  );
}
