import NextImage, { type ImageProps } from "next/image";
import { asset } from "@/lib/basePath";

/**
 * Envoltorio de `next/image` que resuelve el `basePath` del despliegue.
 *
 * Motivo: con `output: "export"` + `images.unoptimized`, `next/image` NO
 * antepone `basePath` a un `src` tipo "/images/x.jpg" (a diferencia de <Link>).
 * En GitHub Pages, bajo /nexo-integral/, eso rompía todas las imágenes.
 *
 * Aquí se antepone el prefijo una sola vez (en local es "" → sin efecto).
 * Uso: `import { Img as Image } from "@/components/ui/Img"` y usar <Image /> igual.
 */
export function Img({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? asset(src) : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
