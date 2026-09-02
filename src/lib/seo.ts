import type { Metadata } from "next";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

// Origen del sitio + basePath (p. ej. "https://alexmerino2.github.io/nexo-integral").
// En local queda igual que site.url.
const baseUrl = withBasePath(site.url);

/**
 * Genera metadata coherente para cada página.
 * Uso: `export const metadata = pageMetadata({ title, description, path })`
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/images/hero-conexion.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;
  // `image` se deja como ruta relativa ("/images/..."): Next la resuelve contra
  // `metadataBase` (que YA incluye el basePath), así no hay que tocarla aquí.
  const fullTitle =
    path === "/" ? `${site.name} | ${site.slogan}` : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: site.logo.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** Datos estructurados de la organización (Schema.org). */
export function organizationJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    slogan: site.slogan,
    description: site.description,
    url: baseUrl,
    logo: `${baseUrl}${site.logo.src}`,
    areaServed: site.country,
  };

  const contactPoint: Record<string, unknown> = { "@type": "ContactPoint" };
  if (site.contact.email) contactPoint.email = site.contact.email;
  if (site.contact.phone) contactPoint.telephone = site.contact.phone;
  if (Object.keys(contactPoint).length > 1) data.contactPoint = contactPoint;

  const sameAs = Object.values(site.social).filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;

  if (site.contact.address) {
    data.address = { "@type": "PostalAddress", streetAddress: site.contact.address };
  }

  return data;
}
