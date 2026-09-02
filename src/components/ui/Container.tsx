import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Ancho máximo. "prose" es más angosto para texto largo. */
  size?: "default" | "prose" | "wide";
};

const sizes = {
  default: "max-w-6xl",
  prose: "max-w-3xl",
  wide: "max-w-7xl",
};

export function Container({
  as: Tag = "div",
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
