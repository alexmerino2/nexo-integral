"use client";

import { Img as Image } from "@/components/ui/Img";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const HEADER_H = 72;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  // Cabecera transparente sobre el hero inmersivo solo en la portada y sin scroll.
  const overlay = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        overlay
          ? "bg-transparent"
          : "bg-sand/90 backdrop-blur-md border-b border-sand-200"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8"
        style={{ height: HEADER_H }}
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.name} — Inicio`}
        >
          <Image
            src={site.logo.src}
            alt=""
            width={44}
            height={44}
            priority
            className={`h-11 w-auto rounded-md ${overlay ? "bg-white/95 p-1" : ""}`}
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-bold ${
                overlay ? "text-white" : "text-ink"
              }`}
            >
              NEXO{" "}
              <span className={overlay ? "text-green-100" : "text-green-600"}>
                INTEGRAL
              </span>
            </span>
            <span
              className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
                overlay ? "text-white/70" : "text-muted"
              }`}
            >
              {site.slogan}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    overlay
                      ? active
                        ? "bg-white/15 text-white"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                      : active
                        ? "bg-green-100 text-green-600"
                        : "text-ink/80 hover:bg-green-100/60 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button
            href={site.primaryCta.href}
            size="md"
            variant={overlay ? "glass" : "primary"}
            trailingIcon="arrow-right"
          >
            {site.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${overlay ? "text-white" : "text-ink"}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="lg:hidden border-t border-sand-200 bg-sand"
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-green-100 text-green-600"
                    : "text-ink hover:bg-green-100/60"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Button
              href={site.primaryCta.href}
              size="lg"
              trailingIcon="arrow-right"
              className="w-full"
            >
              {site.primaryCta.label}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
