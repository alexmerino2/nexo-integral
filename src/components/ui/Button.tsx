import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";
import type { IconName } from "@/types";

type Variant = "primary" | "secondary" | "ghost" | "onInk" | "glass";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white shadow-soft hover:bg-orange-600 hover:-translate-y-0.5 focus-visible:outline-orange-600",
  secondary:
    "bg-white text-ink ring-1 ring-inset ring-sand-200 hover:ring-green hover:text-green-600 hover:-translate-y-0.5 shadow-soft focus-visible:outline-green",
  ghost:
    "text-ink hover:text-green-600 hover:bg-green-100/60 focus-visible:outline-green",
  onInk:
    "bg-white text-ink hover:bg-sand-100 hover:-translate-y-0.5 shadow-soft focus-visible:outline-white",
  glass:
    "bg-white/15 text-white ring-1 ring-inset ring-white/45 backdrop-blur-sm hover:bg-white/25 hover:-translate-y-0.5 focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Icono al final del botón. */
  trailingIcon?: IconName;
  /** Icono al inicio del botón. */
  leadingIcon?: IconName;
};

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    trailingIcon,
    leadingIcon,
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {leadingIcon ? <Icon name={leadingIcon} size={18} /> : null}
      {children}
      {trailingIcon ? <Icon name={trailingIcon} size={18} /> : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
