import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { site, hasContact } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import type { IconName } from "@/types";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Escríbenos para conocer los servicios de Nexo Integral, resolver dudas o solicitar una hora. Estamos para acompañarte.",
  path: "/contacto",
});

type Channel = {
  icon: IconName;
  label: string;
  value: string | null;
  href: string | null;
};

export default function ContactoPage() {
  const channels: Channel[] = [
    {
      icon: "mail",
      label: "Correo",
      value: hasContact.email() ? site.contact.email : "[Correo por definir]",
      href: hasContact.email() ? `mailto:${site.contact.email}` : null,
    },
    {
      icon: "phone",
      label: "Teléfono",
      value: hasContact.phone() ? site.contact.phone : "[Teléfono por definir]",
      href: hasContact.phone()
        ? `tel:${site.contact.phone.replace(/\s+/g, "")}`
        : null,
    },
    {
      icon: "whatsapp",
      label: "WhatsApp",
      value: hasContact.whatsapp() ? "Escríbenos por WhatsApp" : "[WhatsApp por definir]",
      href: hasContact.whatsapp()
        ? `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`
        : null,
    },
    {
      icon: "map-pin",
      label: "Ubicación",
      value: hasContact.address()
        ? site.contact.address
        : `${site.country} · [Dirección por definir]`,
      href: site.contact.mapsUrl || null,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos"
        description="Completa el formulario y te responderemos a la brevedad. También puedes escribirnos directamente por los canales disponibles."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Formulario */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold">Envíanos tu consulta</h2>
            <p className="mt-2 text-muted">
              Los campos marcados con <span className="text-orange-600">*</span> son
              obligatorios. Solo te pediremos la información necesaria para responderte.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Canales + agenda */}
          <aside className="order-1 space-y-6 lg:order-2">
            <div className="rounded-2xl bg-sand p-6 ring-1 ring-sand-200">
              <h2 className="text-lg font-bold">Canales de contacto</h2>
              <ul className="mt-4 space-y-4">
                {channels.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="font-medium text-ink hover:text-blue"
                          {...(c.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-medium text-muted">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">{site.contact.scheduleNote}</p>
            </div>

            <div className="rounded-2xl bg-forest p-6 text-sand">
              <div className="flex items-center gap-2 text-green">
                <Icon name="calendar" size={20} />
                <h2 className="text-lg font-bold text-white">Agenda</h2>
              </div>
              <p className="mt-2 text-sm text-sand/80">
                Pronto podrás reservar tu hora en línea: elegir servicio, profesional,
                fecha y horario. Mientras tanto, usa el formulario y coordinamos contigo.
              </p>
              <Link
                href="#contenido"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:underline"
              >
                Solicitar hora por el formulario
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>

            {/* Placeholder de mapa: se activa al definir site.contact.mapsUrl */}
            {site.contact.mapsUrl ? (
              <div className="overflow-hidden rounded-2xl ring-1 ring-sand-200">
                <iframe
                  title="Ubicación de Nexo Integral en Google Maps"
                  src={site.contact.mapsUrl}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-sand-200 bg-sand text-sm text-muted">
                [Mapa de Google Maps — se mostrará al definir la dirección]
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
