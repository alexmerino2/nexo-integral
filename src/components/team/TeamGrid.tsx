import { TeamMemberCard } from "./TeamMemberCard";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/content/team";
import type { TeamMember } from "@/types";

export function TeamGrid({ members = team }: { members?: TeamMember[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, i) => (
        <Reveal key={member.slug} delay={(i % 3) * 80}>
          <TeamMemberCard member={member} />
        </Reveal>
      ))}
    </div>
  );
}
