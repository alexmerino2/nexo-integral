import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureSplit } from "@/components/ui/FeatureSplit";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Para personas",
  description:
    "Tu bienestar también merece un espacio. Acompañamiento profesional y espacios orientados al bienestar y el desarrollo personal en Nexo Integral.",
  path: "/personas",
  image: "/images/personas.jpg",
});

const commitments = [
  {
    icon: "shield" as const,
    title: "Un espacio de respeto",
    text: "Trabajamos con un lenguaje humano, cercano y profesional, sin asumir diagnósticos ni hacer promesas.",
  },
  {
    icon: "heart" as const,
    title: "Foco en tu proceso",
    text: "Buscamos acompañarte según tu momento y tus necesidades, con una mirada integral de tu bienestar.",
  },
  {
    icon: "shield" as const,
    title: "Confidencialidad",
    text: "Cuidamos tus datos y solicitamos solo la información necesaria para poder acompañarte.",
  },
];

export default function PersonasPage() {
  return (
    <>
      <PageHero
        eyebrow="Para personas"
        title="Tu bienestar también merece un espacio"
        description="En Nexo Integral queremos ofrecer acompañamiento profesional y espacios orientados al bienestar y el desarrollo personal. Un espacio para acompañarte en tu proceso."
      >
        <Button href="/contacto" trailingIcon="arrow-right">
          Quiero solicitar información
        </Button>
        <Button href="/contacto" variant="secondary" leadingIcon="calendar">
          Agendar atención
        </Button>
      </PageHero>

      <FeatureSplit
        image="/images/personas.jpg"
        imageAlt="Retrato de una persona con expresión serena y reflexiva."
        eyebrow="Cómo acompañamos"
        title="Cercanía y profesionalismo, a tu ritmo"
      >
        <p>
          Sabemos que dar el primer paso puede costar. Por eso queremos que este sea un
          lugar tranquilo, donde te sientas escuchada o escuchado desde el respeto.
        </p>
        <p>
          Nuestra propuesta considera distintos ámbitos del bienestar: la salud mental, el
          autocuidado, el aprendizaje y el desarrollo personal.
        </p>
      </FeatureSplit>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Nuestro compromiso"
          title="Lo que puedes esperar de este espacio"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {commitments.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-sand-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon name={c.icon} size={24} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Servicios disponibles"
          title="Áreas pensadas para personas"
          description="El detalle de modalidades, profesionales y valores se informará una vez confirmado."
        />
        <div className="mt-10">
          <ServicesGrid audience="personas" />
        </div>
        <p className="mt-8 rounded-xl bg-sand-100 px-4 py-3 text-sm text-muted">
          <strong className="text-ink">[POR DEFINIR]</strong> Profesionales, especialidades,
          precios, horarios y modalidades de atención.
        </p>
      </Section>

      <ContactCTA
        title="¿Quieres dar el primer paso?"
        description="Escríbenos y te contamos cómo podemos acompañarte."
      />
    </>
  );
}
