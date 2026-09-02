import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Section } from "./Section";

type LegalSection = { heading: string; body: ReactNode };

type LegalDocProps = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

/**
 * Plantilla para documentos legales (Privacidad, Términos).
 * ⚠️ El contenido es un borrador orientativo. Debe ser revisado y validado
 * por la empresa o un profesional legal antes de considerarse definitivo.
 */
export function LegalDoc({ title, intro, updated, sections }: LegalDocProps) {
  return (
    <>
      <PageHero eyebrow="Información legal" title={title} description={intro} />
      <Section tone="white" containerSize="prose">
        <p className="rounded-xl bg-orange-100 px-4 py-3 text-sm text-orange-600">
          <strong>Borrador.</strong> Este texto es una base orientativa y{" "}
          <strong>no constituye asesoría jurídica</strong>. Debe ser revisado y aprobado
          por la empresa antes de su publicación definitiva.
        </p>
        <p className="mt-4 text-sm text-muted">Última actualización: {updated}</p>

        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold">{s.heading}</h2>
              <div className="mt-2 space-y-3 text-muted">{s.body}</div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
