/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sitio 100% estático: `next build` genera HTML/CSS/JS en la carpeta `out/`.
  // Se puede publicar en cualquier hosting estático (Netlify, GitHub Pages,
  // Vercel, un bucket, Apache/Nginx, etc.) sin necesidad de Node en producción.
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    // La optimización de imágenes de Next requiere servidor; en export se sirven tal cual.
    unoptimized: true,
  },
  // El linter se ejecuta con `npm run lint`; no bloquea el build.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
