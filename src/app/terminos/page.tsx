import { LegalDoc } from "@/components/ui/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web de Nexo Integral.",
  path: "/terminos",
});

export default function TerminosPage() {
  return (
    <LegalDoc
      title="Términos y Condiciones"
      intro="Estas condiciones regulan el uso del sitio web de Nexo Integral. Al navegar por el sitio, aceptas los términos descritos a continuación."
      updated="[POR DEFINIR]"
      sections={[
        {
          heading: "1. Objeto del sitio",
          body: (
            <p>
              Este sitio tiene una finalidad informativa: dar a conocer a {site.name}, sus
              áreas de trabajo y sus canales de contacto. La información publicada no
              constituye una prestación de servicios profesionales ni un diagnóstico.
            </p>
          ),
        },
        {
          heading: "2. Información de contenido",
          body: (
            <p>
              Nexo Integral procura mantener la información actualizada y veraz. Algunos
              contenidos pueden estar marcados como provisionales ([POR DEFINIR]) mientras
              se confirman con el equipo profesional.
            </p>
          ),
        },
        {
          heading: "3. Uso del formulario de contacto",
          body: (
            <p>
              El formulario debe utilizarse de buena fe y con información veraz. No debe
              usarse para enviar contenido ofensivo, ilícito o publicidad no solicitada.
            </p>
          ),
        },
        {
          heading: "4. Propiedad intelectual",
          body: (
            <p>
              La marca, el logo y los contenidos del sitio pertenecen a {site.name} o a sus
              respectivos titulares. No está permitida su reproducción sin autorización.
            </p>
          ),
        },
        {
          heading: "5. Responsabilidad",
          body: (
            <p>
              Nexo Integral no se hace responsable por decisiones tomadas exclusivamente a
              partir de la información general publicada en el sitio. Para orientación
              específica, contáctanos directamente.
            </p>
          ),
        },
        {
          heading: "6. Legislación aplicable",
          body: (
            <p>
              Estas condiciones se rigen por la legislación de {site.country}. [POR
              DEFINIR: jurisdicción y datos legales complementarios].
            </p>
          ),
        },
      ]}
    />
  );
}
