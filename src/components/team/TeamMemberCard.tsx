import { Img as Image } from "@/components/ui/Img";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import type { TeamMember } from "@/types";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="h-full">
      {member.placeholder ? (
        <span className="absolute right-4 top-4 rounded-full bg-orange-100 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-orange-600">
          Ejemplo
        </span>
      ) : null}

      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-sand-100 ring-1 ring-sand-200">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.placeholder ? "" : `Retrato de ${member.name}`}
              fill
              sizes="80px"
              className={`object-cover ${member.placeholder ? "opacity-60 grayscale" : ""}`}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-muted">
              <Icon name="users" size={26} />
            </span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold leading-tight">{member.name}</h3>
          <p className="text-sm font-medium text-blue">{member.role}</p>
          {member.specialty ? (
            <p className="text-sm text-muted">{member.specialty}</p>
          ) : null}
        </div>
      </div>

      {member.bio ? <p className="mt-4 text-sm text-muted">{member.bio}</p> : null}

      {member.education?.length ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
            Formación
          </p>
          <ul className="mt-1.5 space-y-1 text-sm text-muted">
            {member.education.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {member.services?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {member.services.map((s) => (
            <span
              key={s}
              className="rounded-full bg-sand-100 px-2.5 py-1 text-xs font-medium text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-6 pt-2">
        <Button
          href="/contacto"
          variant="secondary"
          size="md"
          trailingIcon="arrow-right"
          className="w-full"
          aria-disabled={member.placeholder}
        >
          Contactar / Agendar
        </Button>
      </div>
    </Card>
  );
}
