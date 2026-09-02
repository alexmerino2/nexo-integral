/**
 * Manejo del prefijo de ruta (basePath) para el despliegue.
 *
 *  - Local / la mayoría de hosts (Netlify, Cloudflare, dominio propio):  ""
 *      → las imágenes se sirven en  /images/x.jpg
 *  - GitHub Pages (sitio de proyecto):  "/nexo-integral"
 *      → las imágenes se sirven en  /nexo-integral/images/x.jpg
 *
 * El valor se define UNA sola vez en `next.config.mjs`
 * (`env.NEXT_PUBLIC_BASE_PATH`, derivado de `GITHUB_ACTIONS`). Aquí solo se lee.
 *
 * ⚠️ NO usar `asset()` con los componentes <Image> ni <Link> de Next:
 *    Next.js ya les antepone el basePath automáticamente y se duplicaría.
 *    Usar `asset()` solo para strings sueltas: metadata / Open Graph / favicon /
 *    JSON-LD, es decir, todo lo que no pasa por <Image>/<Link>.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Antepone el basePath a una ruta interna del sitio ("/images/logo.png" → "/nexo-integral/images/logo.png"). */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  return `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Devuelve el origen del sitio con el basePath añadido, sin barra final. */
export function withBasePath(origin: string): string {
  return `${origin.replace(/\/$/, "")}${BASE_PATH}`;
}
