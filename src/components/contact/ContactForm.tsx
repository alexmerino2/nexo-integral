"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site, hasContact } from "@/content/site";
import {
  CONTACT_REASONS,
  contactSchema,
  type ContactFieldErrors,
} from "@/lib/contactSchema";

type Status = "idle" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-body shadow-soft outline-none transition-colors placeholder:text-muted/70 focus:border-blue focus:ring-2 focus:ring-blue/30";

/**
 * Formulario de contacto para un sitio estático.
 *
 * Valida en el navegador y abre el cliente de correo del usuario con el
 * mensaje ya redactado (mailto:). No requiere servidor.
 *
 * 👉 Para envío automático por servidor (SMTP/servicio de formularios),
 *    se puede incorporar más adelante como módulo: bastaría con reemplazar
 *    `openMailto()` por una llamada `fetch()` al endpoint correspondiente.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactFieldErrors>({});

  const emailConfigured = hasContact.email();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      reason: String(fd.get("reason") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors as ContactFieldErrors);
      setStatus("error");
      return;
    }

    // Honeypot: si viene con contenido, es un bot. Fingimos éxito.
    if (parsed.data.website) {
      setStatus("success");
      form.reset();
      return;
    }

    if (emailConfigured) {
      const subject = `Consulta web — ${parsed.data.reason} — ${parsed.data.name}`;
      const body = [
        `Nombre: ${parsed.data.name}`,
        `Correo: ${parsed.data.email}`,
        `Teléfono: ${parsed.data.phone?.trim() || "—"}`,
        `Motivo: ${parsed.data.reason}`,
        "",
        parsed.data.message,
      ].join("\n");
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-green-100 p-8 text-center ring-1 ring-green/30">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-white">
          <Icon name="check" size={30} />
        </span>
        <h3 className="mt-4 text-xl font-bold text-ink">
          {emailConfigured ? "¡Ya casi está!" : "¡Formulario listo!"}
        </h3>
        <p className="mt-2 text-muted">
          {emailConfigured
            ? "Se abrió tu aplicación de correo con el mensaje redactado. Solo tienes que enviarlo."
            : "Cuando definamos el correo de contacto, este formulario enviará tu consulta automáticamente."}
        </p>
        <button
          type="button"
          className="mt-5 text-sm font-semibold text-green-600 hover:underline"
          onClick={() => setStatus("idle")}
        >
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {!emailConfigured ? (
        <p className="rounded-xl bg-orange-100 px-4 py-3 text-sm font-medium text-orange-600">
          El correo de contacto aún está por definir. Puedes completar el formulario para
          revisar su funcionamiento; el envío quedará activo al configurar el correo.
        </p>
      ) : null}

      <Field label="Nombre" name="name" errors={errors.name} required>
        <input id="name" name="name" type="text" autoComplete="name" className={inputClass} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Correo" name="email" errors={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Teléfono (opcional)" name="phone" errors={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Motivo de contacto" name="reason" errors={errors.reason} required>
        <select id="reason" name="reason" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Selecciona una opción
          </option>
          {CONTACT_REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensaje" name="message" errors={errors.message} required>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
          placeholder="Cuéntanos brevemente en qué podemos ayudarte."
        />
      </Field>

      {/* Honeypot: oculto para personas, tentador para bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">No completar</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            name="consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-sand-200 text-blue focus:ring-blue"
          />
          <span>
            He leído y acepto la{" "}
            <Link href="/privacidad" className="font-medium text-blue hover:underline">
              Política de Privacidad
            </Link>
            . Usaremos tus datos únicamente para responder esta consulta.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1 text-sm text-orange-600">{errors.consent[0]}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" trailingIcon="arrow-right">
        Enviar consulta
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  errors,
  required,
  children,
}: {
  label: string;
  name: string;
  errors?: string[];
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-orange-600"> *</span> : null}
      </label>
      {children}
      {errors?.length ? (
        <p className="mt-1 text-sm text-orange-600">{errors[0]}</p>
      ) : null}
    </div>
  );
}
