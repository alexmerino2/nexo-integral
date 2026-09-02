import { ServiceCard } from "./ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { services as allServices } from "@/content/services";
import type { Service } from "@/types";

type ServicesGridProps = {
  /** Subconjunto de servicios; por defecto todos. */
  items?: Service[];
  /** Filtra por público. */
  audience?: "personas" | "organizaciones";
  showDetails?: boolean;
  columns?: 2 | 3;
};

export function ServicesGrid({
  items,
  audience,
  showDetails = false,
  columns = 3,
}: ServicesGridProps) {
  let list = items ?? allServices;
  if (audience) list = list.filter((s) => s.audience.includes(audience));

  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${cols}`}>
      {list.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 3) * 80}>
          <ServiceCard service={service} showDetails={showDetails} />
        </Reveal>
      ))}
    </div>
  );
}
