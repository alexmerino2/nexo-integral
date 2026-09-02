import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Si se pasa, toda la tarjeta es un enlace. */
  href?: string;
  interactive?: boolean;
};

export function Card({ children, className = "", id, href, interactive }: CardProps) {
  const classes = `group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-sand-200 shadow-soft transition-all duration-200 ${
    interactive || href
      ? "hover:-translate-y-1 hover:shadow-card hover:ring-blue/30"
      : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} id={id} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}
