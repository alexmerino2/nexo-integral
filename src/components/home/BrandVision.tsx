import { Img as Image } from "@/components/ui/Img";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { pillars } from "@/content/services";

export function BrandVision() {
  return (
    <section id="mirada-integral" className="bg-cloud py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-green-600">
              Nuestra forma de entender el bienestar
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-[2.6rem] sm:leading-[1.08]">
              Más que atención, una mirada integral
            </h2>
            <p className="mt-5 text-lg text-muted">
              Nexo Integral nace desde la convicción de que el bienestar se construye
              considerando a las personas en toda su dimensión.
            </p>
            <p className="mt-4 text-muted">
              Buscamos generar conexiones entre salud, bienestar, aprendizaje y desarrollo.
              El concepto de <strong className="text-ink">Nexo</strong> representa esa
              conexión: entre una persona y otra, entre la persona y su entorno, y entre
              las personas y las organizaciones.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {pillars.map((pillar) => (
                <li key={pillar.title}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-sm font-medium text-ink ring-1 ring-sand-200">
                    <Icon name={pillar.icon} size={16} className="text-green-600" />
                    {pillar.title}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-sand-200 sm:aspect-[4/4]">
              <Image
                src="/images/personas.jpg"
                alt="Retrato de una persona con expresión serena y reflexiva."
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
