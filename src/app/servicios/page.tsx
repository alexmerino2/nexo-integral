import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Servicios",
  description:
    "Salud mental y psicología, bienestar, educación, capacitación y evaluación de personas y organizaciones. Conoce las áreas en las que acompaña Nexo Integral.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Áreas en las que acompañamos"
        description="Reunimos profesionales y programas en distintas áreas de bienestar, educación y desarrollo, creando un espacio donde puedas encontrar alternativas y conexiones que hagan sentido para ti."
      >
        <Button href="/contacto" trailingIcon="arrow-right">
          Solicitar información
        </Button>
        <Button href="/personas" variant="secondary">
          Servicios para personas
        </Button>
      </PageHero>

      <Section tone="white">
        <ServicesGrid showDetails />
      </Section>

      <Section tone="wash" containerSize="prose">
        <SectionHeading
          align="center"
          eyebrow="Preguntas frecuentes"
          title="Antes de escribirnos"
        />
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <ContactCTA
        title="¿Tienes un requerimiento específico?"
        description="Cuéntanos qué necesitas y te orientamos sobre cómo podemos ayudarte."
      />
    </>
  );
}
