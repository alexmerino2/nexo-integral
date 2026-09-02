import { Hero } from "@/components/home/Hero";
import { AudiencePaths } from "@/components/home/AudiencePaths";
import { BrandVision } from "@/components/home/BrandVision";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TeamPreview } from "@/components/home/TeamPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Inicio",
  description:
    "Nexo Integral conecta personas, bienestar y desarrollo. Servicios de salud mental, psicología, bienestar, educación, capacitación y evaluación para personas y organizaciones en Chile.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudiencePaths />
      <BrandVision />
      <ServicesPreview />
      <TeamPreview />
      <ContactCTA
        title="Hablemos"
        description="¿Quieres conocer nuestros servicios? Escríbenos y te acompañamos en el siguiente paso."
      />
    </>
  );
}
