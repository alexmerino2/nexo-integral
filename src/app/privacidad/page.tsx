import { LegalDoc } from "@/components/ui/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Política de Privacidad",
  description:
    "Cómo Nexo Integral trata los datos personales recogidos a través de este sitio web.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <LegalDoc
      title="Política de Privacidad"
      intro="En Nexo Integral tratamos los datos personales con especial cuidado, considerando que trabajamos en ámbitos relacionados con las personas y la salud mental."
      updated="[POR DEFINIR]"
      sections={[
        {
          heading: "1. Responsable del tratamiento",
          body: (
            <p>
              El responsable del tratamiento de los datos es {site.name} ({site.legalName}).
              Los datos de contacto del responsable se indicarán aquí una vez definidos.
            </p>
          ),
        },
        {
          heading: "2. Qué datos recopilamos",
          body: (
            <p>
              A través del formulario de contacto recopilamos únicamente: nombre, correo
              electrónico, teléfono (opcional), motivo de contacto y el mensaje que decidas
              enviarnos. No solicitamos información clínica sensible mediante formularios
              públicos.
            </p>
          ),
        },
        {
          heading: "3. Para qué usamos los datos",
          body: (
            <p>
              Usamos los datos exclusivamente para responder tu consulta y coordinar la
              atención o el servicio solicitado. No los utilizamos para fines publicitarios
              ni los compartimos con terceros sin tu consentimiento, salvo obligación legal.
            </p>
          ),
        },
        {
          heading: "4. Conservación",
          body: (
            <p>
              Conservamos los datos durante el tiempo necesario para gestionar tu solicitud
              y cumplir las obligaciones legales aplicables. [POR DEFINIR: plazo de
              conservación].
            </p>
          ),
        },
        {
          heading: "5. Tus derechos",
          body: (
            <p>
              Puedes solicitar el acceso, rectificación, actualización o eliminación de tus
              datos personales escribiéndonos a través de los canales de contacto del sitio.
            </p>
          ),
        },
        {
          heading: "6. Seguridad",
          body: (
            <p>
              Aplicamos medidas razonables para proteger la información: validación y
              sanitización de formularios, protección contra envíos automatizados y uso de
              conexiones cifradas (HTTPS) en producción.
            </p>
          ),
        },
        {
          heading: "7. Cambios a esta política",
          body: (
            <p>
              Podemos actualizar esta política para reflejar cambios legales u operativos.
              La versión vigente será siempre la publicada en esta página.
            </p>
          ),
        },
      ]}
    />
  );
}
