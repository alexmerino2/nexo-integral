import type { TeamMember } from "@/types";

/**
 * Equipo de Nexo Integral.
 *
 * ⚠️ CONTENIDO TEMPORAL: los registros de abajo son ejemplos con datos
 * ficticios, marcados con `placeholder: true`. NO representan profesionales
 * reales. Reemplázalos (o elimínalos) cuando se entregue la información real.
 *
 * Para agregar un integrante nuevo, añade un objeto con esta forma. La
 * página /equipo se actualiza sola.
 */
export const team: TeamMember[] = [
  {
    slug: "profesional-ejemplo-1",
    name: "[Nombre profesional]",
    role: "[Profesión]",
    specialty: "[Especialidad]",
    bio: "[Breve descripción del profesional: enfoque de trabajo, áreas de interés y forma de acompañar. Este texto es un placeholder.]",
    education: ["[Formación / título]", "[Postítulo o diplomado]"],
    services: ["Salud mental y Psicología", "Bienestar"],
    photo: "/images/equipo-placeholder.jpg",
    placeholder: true,
  },
  {
    slug: "profesional-ejemplo-2",
    name: "[Nombre profesional]",
    role: "[Profesión]",
    specialty: "[Especialidad]",
    bio: "[Breve descripción del profesional. Este texto es un placeholder y debe reemplazarse por información real.]",
    education: ["[Formación / título]"],
    services: ["Capacitación", "Evaluación de Personas"],
    photo: "/images/equipo-placeholder.jpg",
    placeholder: true,
  },
  {
    slug: "profesional-ejemplo-3",
    name: "[Nombre profesional]",
    role: "[Profesión]",
    specialty: "[Especialidad]",
    bio: "[Breve descripción del profesional. Este texto es un placeholder.]",
    education: ["[Formación / título]"],
    services: ["Educación", "Bienestar"],
    photo: "/images/equipo-placeholder.jpg",
    placeholder: true,
  },
];

export const hasRealTeam = team.some((m) => !m.placeholder);
