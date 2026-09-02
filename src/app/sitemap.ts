import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/nosotros", priority: 0.8 },
    { path: "/servicios", priority: 0.9 },
    { path: "/personas", priority: 0.9 },
    { path: "/organizaciones", priority: 0.9 },
    { path: "/equipo", priority: 0.7 },
    { path: "/contacto", priority: 0.8 },
    { path: "/privacidad", priority: 0.3 },
    { path: "/terminos", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
