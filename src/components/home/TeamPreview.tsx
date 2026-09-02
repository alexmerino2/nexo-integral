import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TeamGrid } from "@/components/team/TeamGrid";
import { team, hasRealTeam } from "@/content/team";

export function TeamPreview() {
  return (
    <Section tone="sand" id="equipo">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Nuestro equipo"
          title="Profesionales para acompañarte"
          description={
            hasRealTeam
              ? "Un equipo con distintas especialidades, con una mirada común centrada en las personas."
              : "Esta sección está preparada para incorporar a los profesionales de Nexo Integral. Por ahora se muestran fichas de ejemplo."
          }
        />
        <Button
          href="/equipo"
          variant="secondary"
          trailingIcon="arrow-right"
          className="shrink-0"
        >
          Conocer al equipo
        </Button>
      </div>
      <div className="mt-12">
        <TeamGrid members={team.slice(0, 3)} />
      </div>
    </Section>
  );
}
