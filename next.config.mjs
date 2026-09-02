/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  // GitHub Pages publica el sitio dentro de /nexo-integral/
  ...(isGitHubPages && {
    basePath: "/nexo-integral",
    assetPrefix: "/nexo-integral/",
  }),

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