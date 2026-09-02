import { Img as Image } from "@/components/ui/Img";
import Link from "next/link";
import { site, hasContact } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { key: "instagram", icon: "instagram" as const, url: site.social.instagram },
    { key: "facebook", icon: "facebook" as const, url: site.social.facebook },
    { key: "linkedin", icon: "linkedin" as const, url: site.social.linkedin },
  ].filter((s) => s.url);

  return (
    <footer className="bg-forest text-sand/80">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={site.logo.src}
                alt=""
                width={48}
                height={48}
                className="h-12 w-auto rounded-md bg-white/95 p-1"
              />
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-white">
                  NEXO INTEGRAL
                </p>
                <p className="text-xs uppercase tracking-[0.16em] text-sand/70">
                  {site.slogan}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-sand/70">{site.description}</p>

            {socials.length > 0 ? (
              <ul className="mt-5 flex gap-3">
                {socials.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                      aria-label={s.key}
                    >
                      <Icon name={s.icon} size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del sitio">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Navegación
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Contacto
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-green" />
                {hasContact.email() ? (
                  <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                    {site.contact.email}
                  </a>
                ) : (
                  <span className="text-sand/60">[Correo por definir]</span>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-green" />
                {hasContact.phone() ? (
                  <a
                    href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                    className="hover:text-white"
                  >
                    {site.contact.phone}
                  </a>
                ) : (
                  <span className="text-sand/60">[Teléfono por definir]</span>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-green" />
                {hasContact.address() ? (
                  <span>{site.contact.address}</span>
                ) : (
                  <span className="text-sand/60">{site.country} · [Dirección por definir]</span>
                )}
              </li>
            </ul>
            <ul className="mt-5 space-y-2 text-sm">
              {site.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sand/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-sand/60">
          <p>
            © {year} {site.name} — Todos los derechos reservados.
          </p>
          <p className="mt-2 max-w-3xl leading-relaxed">
            <span className="font-medium text-sand/70">Información legal: </span>
            {site.legalName}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
