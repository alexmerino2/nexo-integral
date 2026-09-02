import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

/**
 * Hero inmersivo (dirección "Orgánico"): imagen a sangre completa con velo
 * degradado (azul → verde bosque), texto blanco y una onda curva que da paso
 * a la sección siguiente. El header transparente se dibuja encima (ver Navbar).
 */
export function Hero() {
  return (
    <section className="relative -mt-[72px] flex min-h-[92svh] flex-col text-white">
      {/* Fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/bienestar.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-veil absolute inset-0" />
      </div>

      {/* Contenido */}
      <Container className="relative flex flex-1 flex-col justify-center pt-32 pb-28 sm:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-green-100">
          {site.slogan}
        </p>
        <h1 className="mt-6 max-w-[16ch] text-4xl font-bold leading-[1.08] text-white sm:text-6xl sm:leading-[1.05]">
          El bienestar crece cuando estamos conectados
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
          {site.tagline} Una mirada integral para acompañar a personas y organizaciones.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/servicios" size="lg" trailingIcon="arrow-right">
            Conoce nuestros servicios
          </Button>
          <Button href="/contacto" size="lg" variant="glass">
            Contáctanos
          </Button>
        </div>
      </Container>

      {/* Onda curva de transición hacia la sección siguiente */}
      <svg
        className="relative block h-[70px] w-full text-sand"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,80 480,0 720,20 C960,40 1200,80 1440,36 L1440,70 L0,70 Z"
        />
      </svg>
    </section>
  );
}
