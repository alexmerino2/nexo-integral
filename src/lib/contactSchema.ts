import { z } from "zod";

/** Motivos de contacto disponibles en el formulario. */
export const CONTACT_REASONS = [
  "Consulta general",
  "Atención para personas",
  "Servicios para organizaciones",
  "Capacitación",
  "Evaluación",
  "Otro",
] as const;

/**
 * Esquema del formulario de contacto.
 * Se usa tanto en el cliente (validación previa) como en el servidor
 * (validación real antes de enviar el correo).
 *
 * `website` es un honeypot: los humanos nunca lo ven ni lo completan;
 * si llega con contenido, se trata como spam.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre.")
    .max(120, "El nombre es demasiado largo."),
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo.")
    .email("Ingresa un correo válido.")
    .max(200),
  phone: z
    .string()
    .trim()
    .max(40, "El teléfono es demasiado largo.")
    .optional()
    .or(z.literal("")),
  reason: z.enum(CONTACT_REASONS, {
    message: "Selecciona un motivo de contacto.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres).")
    .max(2000, "El mensaje es demasiado largo (máximo 2000 caracteres)."),
  consent: z.literal(true, {
    message: "Debes aceptar la política de privacidad para continuar.",
  }),
  // Honeypot: no se valida su contenido a propósito. El endpoint lo revisa
  // aparte y, si viene con texto, responde "ok" sin hacer nada (anti-bot).
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<
  Record<keyof ContactInput, string[]>
>;
