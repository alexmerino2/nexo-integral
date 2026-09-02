import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">
        Error 404
      </p>
      <h1 className="mt-3 text-4xl font-bold">No encontramos esta página</h1>
      <p className="mt-4 max-w-md text-muted">
        Es posible que el enlace haya cambiado o que la página ya no exista. Puedes volver
        al inicio o escribirnos si necesitas ayuda.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" trailingIcon="arrow-right">
          Volver al inicio
        </Button>
        <Button href="/contacto" variant="secondary">
          Contáctanos
        </Button>
      </div>
    </Container>
  );
}
