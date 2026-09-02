/** @type {import('next').NextConfig} */

// GitHub Pages publica el sitio dentro de /nexo-integral/.
// El nombre de la subcarpeta vive SOLO aquí; el resto del código lo lee
// a través de env.NEXT_PUBLIC_BASE_PATH (ver src/lib/basePath.ts).
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/nexo-integral" : "";

const nextConfig = {
  ...(basePath && {
    basePath,
    assetPrefix: `${basePath}/`,
  }),

  // Expuesto a la app (server y cliente) para construir rutas de metadata,
  // Open Graph, favicon y JSON-LD. En local vale "".
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // Sitio 100% estático
  output: "export",

  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
