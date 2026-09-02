import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/basePath";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = withBasePath(site.url); // origen + basePath
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: site.url.replace(/\/$/, ""), // el host es solo el dominio, sin subruta
  };
}
