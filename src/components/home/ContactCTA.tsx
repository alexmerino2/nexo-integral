import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type ContactCTAProps = {
  title?: string;
  description?: string;
};

export function ContactCTA({
  title = "Hablemos",
  description = "¿Quieres conocer nuestros servicios o resolver una duda? Escríbenos y te acompañamos en el siguiente paso.",
}: ContactCTAProps) {
  return (
    <section className="bg-cloud py-16 sm:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-forest px-6 py-16 text-center shadow-card sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(30rem 16rem at 15% 0%, rgba(95,165,68,.35), transparent 60%), radial-gradient(28rem 16rem at 100% 100%, rgba(44,127,184,.28), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <h2 className="relative text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/85">
            {description}
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contacto" size="lg" trailingIcon="arrow-right">
              Contáctanos
            </Button>
            <Button href="/servicios" size="lg" variant="glass">
              Ver servicios
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
