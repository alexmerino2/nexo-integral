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
  title: "Para organizaciones",
  description:
    "Personas que crecen. Organizaciones que avanzan. Capacitación, evaluación, bienestar organizacional y desarrollo de equipos con Nexo Integral.",
  path: "/organizaciones",
  image: "/images/organizaciones.jpg",
});

const clients = [
  { icon: "building" as const, label: "Empresas" },
  { icon: "users" as const, label: "Organizaciones" },
  { icon: "shield" as const, label: "Instituciones" },
  { icon: "graduation" as const, label: "Establecimientos educacionales" },
];

const potential = [
  "Capacitación",
  "Evaluación",
  "Bienestar organizacional",
  "Talleres",
  "Desarrollo de personas",
  "Desarrollo organizacional",
];

export default function OrganizacionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Para organizaciones"
        title="Personas que crecen. Organizaciones que avanzan."
        description="Acompañamos a empresas e instituciones que buscan cuidar a sus equipos y desarrollar sus capacidades, con una mirada integral del bienestar."
      >
        <Button href="/contacto" trailingIcon="arrow-right">
          Solicitar una propuesta
        </Button>
        <Button href="/contacto" variant="secondary">
          Hablar con Nexo Integral
        </Button>
      </PageHero>

      <Section tone="white" spacing="compact">
        <SectionHeading
          align="center"
          eyebrow="Con quiénes trabajamos"
          title="Un servicio preparado para el mundo organizacional"
        />
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {clients.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 70}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-sand p-5 text-center ring-1 ring-sand-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Icon name={c.icon} size={24} />
                </span>
                <span className="text-sm font-semibold text-ink">{c.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FeatureSplit
        image="/images/organizaciones.jpg"
        imageAlt="Dos profesionales celebrando un acuerdo en una reunión de trabajo."
        eyebrow="Servicios potenciales"
        title="Programas que se adaptan a cada organización"
        imageSide="left"
        tone="sand"
      >
        <p>
          Diseñamos propuestas a medida según los objetivos de cada equipo. Estas son
          algunas de las líneas en las que podemos trabajar:
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {potential.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-base text-body">
              <Icon name="check" size={18} className="shrink-0 text-green-600" />
              {p}
            </li>
          ))}
        </ul>
      </FeatureSplit>

      <Section tone="white">
        <SectionHeading
          eyebrow="Áreas para organizaciones"
          title="Servicios orientados a equipos e instituciones"
        />
        <div className="mt-10">
          <ServicesGrid audience="organizaciones" />
        </div>
        <p className="mt-8 rounded-xl bg-sand-100 px-4 py-3 text-sm text-muted">
          <strong className="text-ink">[POR DEFINIR]</strong> Metodologías, plazos,
          certificaciones y modalidades de trabajo con organizaciones.
        </p>
      </Section>

      <ContactCTA
        title="¿Conversamos sobre tu organización?"
        description="Cuéntanos qué necesita tu equipo y preparamos una propuesta a la medida."
      />
    </>
  );
}
