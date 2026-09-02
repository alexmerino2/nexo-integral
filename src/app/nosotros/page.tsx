import { Img as Image } from "@/components/ui/Img";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/home/ContactCTA";
import { pillars } from "@/content/services";
import { accentClasses } from "@/lib/accents";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nosotros",
  description:
    "Nexo Integral nace desde una mirada integral de las personas y las organizaciones: conectar salud, bienestar, aprendizaje y desarrollo.",
  path: "/nosotros",
});

const connections = [
  "Persona ↔ Persona",
  "Persona ↔ Bienestar",
  "Persona ↔ Entorno",
  "Persona ↔ Organización",
  "Organización ↔ Personas",
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Más que atención, una mirada integral"
        description="Nexo Integral no es solamente una consulta psicológica. Es un espacio que busca conectar bienestar, salud, desarrollo y equilibrio para acompañar a personas y organizaciones."
      />

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="Nuestro origen"
              title="El bienestar se construye mirando a la persona completa"
            />
            <div className="mt-5 space-y-4 text-lg text-muted">
              <p>
                Nexo Integral nace desde la convicción de que el bienestar se construye
                considerando a las personas en toda su dimensión. Por eso buscamos generar
                conexiones entre salud, bienestar, aprendizaje y desarrollo.
              </p>
              <p>
                <strong className="text-ink">Integral</strong> representa una mirada amplia,
                donde diferentes disciplinas y servicios pueden trabajar conjuntamente. Y{" "}
                <strong className="text-ink">Nexo</strong> es la conexión que hace posible
                ese trabajo en común.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-sand-200">
              <Image
                src="/images/nosotros.jpg"
                alt="Un grupo de personas conversando y trabajando en torno a una mesa."
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="wash">
        <SectionHeading
          align="center"
          eyebrow="El concepto de Nexo"
          title="Conexión en todas las direcciones"
          description="El nexo representa los vínculos que sostienen el bienestar."
        />
        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {connections.map((c, i) => (
            <Reveal as="li" key={c} delay={i * 70}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft ring-1 ring-sand-200">
                <Icon name="handshake" size={16} className="text-blue" />
                {c}
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Nuestros pilares"
          title="Cómo entendemos el trabajo integral"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => {
            const a = accentClasses[pillar.accent];
            return (
              <Reveal as="li" key={pillar.title} delay={i * 70}>
                <div className="h-full rounded-2xl bg-sand p-5 ring-1 ring-sand-200">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.iconWrap}`}
                  >
                    <Icon name={pillar.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{pillar.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <Section tone="wash" spacing="compact">
        <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft ring-1 ring-sand-200 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Una marca preparada para crecer
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Nexo Integral está pensada para incorporar con el tiempo nuevos profesionales,
            servicios y líneas de trabajo, manteniendo siempre una mirada centrada en las
            personas.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/servicios" trailingIcon="arrow-right">
              Ver nuestros servicios
            </Button>
            <Button href="/equipo" variant="secondary">
              Conocer al equipo
            </Button>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
