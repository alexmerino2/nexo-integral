import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { accentClasses } from "@/lib/accents";
import type { IconName } from "@/types";

type Path = {
  title: string;
  href: string;
  tags: string;
  description: string;
  icon: IconName;
  accent: "blue" | "green" | "orange";
};

const paths: Path[] = [
  {
    title: "Personas",
    href: "/personas",
    tags: "Salud mental · Psicología · Bienestar",
    description:
      "Acompañamiento profesional y espacios orientados al bienestar y el desarrollo personal.",
    icon: "users",
    accent: "blue",
  },
  {
    title: "Organizaciones",
    href: "/organizaciones",
    tags: "Evaluación · Capacitación · Bienestar",
    description:
      "Programas y servicios para el desarrollo de personas y equipos en empresas e instituciones.",
    icon: "building",
    accent: "green",
  },
  {
    title: "Educación",
    href: "/servicios#educacion",
    tags: "Talleres · Formación · Desarrollo",
    description:
      "Actividades educativas y programas de formación para acompañar procesos de aprendizaje.",
    icon: "graduation",
    accent: "orange",
  },
];

/**
 * Tarjetas de audiencia que "montan" sobre el hero inmersivo (margen negativo)
 * y luego dejan paso a la sección de visión.
 */
export function AudiencePaths() {
  return (
    <section id="como-ayudamos" className="bg-sand pb-16 sm:pb-20">
      <Container className="relative z-10 -mt-24 sm:-mt-28">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
          ¿Cómo podemos ayudarte?
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {paths.map((path, i) => {
            const a = accentClasses[path.accent];
            return (
              <Reveal key={path.href} delay={i * 90}>
                <Card href={path.href} className="h-full rounded-3xl p-8 shadow-card">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.iconWrap}`}
                  >
                    <Icon name={path.icon} size={26} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{path.title}</h3>
                  <p
                    className={`mt-1 text-xs font-semibold uppercase tracking-[0.1em] ${a.text}`}
                  >
                    {path.tags}
                  </p>
                  <p className="mt-3 text-muted">{path.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-green-600">
                    Ver más
                    <Icon name="arrow-right" size={16} />
                  </span>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
