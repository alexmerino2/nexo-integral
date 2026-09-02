import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/layout/WhatsappFloat";
import { site } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";
import { asset, withBasePath } from "@/lib/basePath";
import "./globals.css";

const logoIcon = asset(site.logo.src);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(withBasePath(site.url)),
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "psicología",
    "salud mental",
    "bienestar",
    "capacitación",
    "evaluación de personas",
    "bienestar organizacional",
    "desarrollo personal",
    "desarrollo organizacional",
    "Chile",
  ],
  icons: {
    icon: [{ url: logoIcon, type: "image/png" }],
    apple: [{ url: logoIcon }],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#173a2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsappFloat />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </body>
    </html>
  );
}
