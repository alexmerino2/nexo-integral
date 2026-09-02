import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TeamGrid } from "@/components/team/TeamGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Icon } from "@/components/ui/Icon";
import { hasRealTeam } from "@/content/team";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Equipo",
  description:
    "Conoce al equipo de profesionales de Nexo Integral: distintas especialidades con una mirada común centrada en las personas.",
  path: "/equipo",
});

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Profesionales para acompañarte"
        description="Nexo Integral reúne distintas disciplinas en torno a una misma forma de trabajar: una mirada integral y centrada en las personas."
      />

      <Section tone="white">
        {!hasRealTeam ? (
          <div className="mb-10 flex items-start gap-3 rounded-2xl bg-orange-100 px-5 py-4 text-sm text-orange-600">
            <Icon name="sparkles" size={20} className="mt-0.5 shrink-0" />
            <p>
              <strong>Contenido temporal.</strong> Las fichas que se muestran a
              continuación son ejemplos para ilustrar el diseño. Se reemplazarán por los
              profesionales reales de Nexo Integral cuando esa información esté disponible.
            </p>
          </div>
        ) : null}

        <TeamGrid />

        <p className="mt-10 text-center text-sm text-muted">
          La estructura de esta página permite agregar fácilmente nuevos integrantes: cada
          ficha admite fotografía, nombre, profesión, especialidad, formación y servicios.
        </p>
      </Section>

      <ContactCTA
        title="¿Quieres sumarte al equipo?"
        description="Si eres profesional del área de la salud, el bienestar o la educación, escríbenos."
      />
    </>
  );
}
