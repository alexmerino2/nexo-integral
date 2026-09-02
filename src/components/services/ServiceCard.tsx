import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { accentClasses } from "@/lib/accents";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
  /** Enlace del botón "Conocer más". */
  href?: string;
  showDetails?: boolean;
};

export function ServiceCard({ service, href, showDetails = false }: ServiceCardProps) {
  const a = accentClasses[service.accent];
  const linkHref = href ?? `/servicios#${service.slug}`;

  return (
    <Card className="h-full" id={service.slug}>
      <span className={`absolute left-0 top-6 h-10 w-1 rounded-r ${a.bar}`} aria-hidden="true" />
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.iconWrap}`}
      >
        <Icon name={service.icon} size={24} />
      </span>
      <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
      <p className="mt-3 text-muted">{service.summary}</p>

      {showDetails && service.details?.length ? (
        <ul className="mt-4 space-y-2">
          {service.details.map((d) => (
            <li key={d} className="flex gap-2.5 text-sm text-body/90">
              <Icon name="check" size={18} className={`mt-0.5 shrink-0 ${a.text}`} />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
        {service.audience.map((aud) => (
          <span
            key={aud}
            className="rounded-full bg-sand-100 px-2.5 py-1 text-xs font-medium capitalize text-muted"
          >
            {aud}
          </span>
        ))}
      </div>

      <a
        href={linkHref}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-green-600"
      >
        Conocer más
        <Icon name="arrow-right" size={16} />
      </a>
    </Card>
  );
}
