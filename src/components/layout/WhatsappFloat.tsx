import { site, hasContact } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

/**
 * Botón flotante de WhatsApp.
 * Solo se renderiza si `site.contact.whatsapp` tiene un número configurado.
 * Mientras no exista el número real, el componente no muestra nada.
 */
export function WhatsappFloat() {
  if (!hasContact.whatsapp()) return null;

  const number = site.contact.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(
    "Hola, me gustaría recibir más información sobre Nexo Integral.",
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-card transition-transform hover:scale-105 hover:bg-green-600"
    >
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
