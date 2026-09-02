import type { Service, Pillar } from "@/types";

/**
 * Categorías de servicios de Nexo Integral.
 *
 * Se usan categorías amplias a propósito: NO se inventan tratamientos,
 * técnicas ni programas específicos que la empresa no haya confirmado.
 * Para añadir un servicio nuevo basta con agregar un objeto a este arreglo.
 */
export const services: Service[] = [
  {
    slug: "salud-mental-psicologia",
    title: "Salud mental y Psicología",
    icon: "brain",
    summary:
      "Acompañamiento profesional relacionado con la salud mental y la psicología, en un espacio de respeto y confidencialidad.",
    audience: ["personas", "organizaciones"],
    accent: "blue",
    details: [
      "Espacios de acompañamiento psicológico para distintas etapas y necesidades.",
      "Orientación y derivación cuando corresponda a otras especialidades.",
      "[POR DEFINIR] Modalidades de atención (presencial / online) y profesionales a cargo.",
    ],
  },
  {
    slug: "bienestar",
    title: "Bienestar",
    icon: "heart",
    summary:
      "Servicios y actividades orientadas al bienestar personal y colectivo, con una mirada preventiva y de cuidado.",
    audience: ["personas", "organizaciones"],
    accent: "green",
    details: [
      "Actividades orientadas al autocuidado y la calidad de vida.",
      "Programas de bienestar para grupos y equipos.",
      "[POR DEFINIR] Formatos, duración y facilitadores.",
    ],
  },
  {
    slug: "educacion",
    title: "Educación",
    icon: "graduation",
    summary:
      "Actividades educativas, talleres y programas de formación para acompañar procesos de aprendizaje.",
    audience: ["personas", "organizaciones"],
    accent: "orange",
    details: [
      "Talleres y charlas sobre temáticas de bienestar, desarrollo y aprendizaje.",
      "Programas formativos adaptables a distintos públicos.",
      "[POR DEFINIR] Catálogo de talleres y relatores.",
    ],
  },
  {
    slug: "capacitacion",
    title: "Capacitación",
    icon: "sparkles",
    summary:
      "Capacitación y desarrollo de competencias para personas y organizaciones que buscan crecer.",
    audience: ["organizaciones", "personas"],
    accent: "ink",
    details: [
      "Desarrollo de competencias personales y de equipos.",
      "Diseño de programas a medida según los objetivos de cada organización.",
      "[POR DEFINIR] Áreas temáticas, certificación y modalidad (ej. franquicia tributaria).",
    ],
  },
  {
    slug: "evaluacion-personas",
    title: "Evaluación de Personas",
    icon: "clipboard",
    summary:
      "Procesos de evaluación aplicados con rigor profesional y uso responsable de la información.",
    audience: ["organizaciones", "personas"],
    accent: "blue",
    details: [
      "Evaluaciones orientadas a procesos de selección, desarrollo u orientación.",
      "Entrega de resultados con enfoque ético y resguardo de datos.",
      "[POR DEFINIR] Instrumentos, alcances y entregables.",
    ],
  },
  {
    slug: "evaluacion-organizaciones",
    title: "Evaluación de Organizaciones",
    icon: "building",
    summary:
      "Servicios relacionados con el análisis y la evaluación de organizaciones y sus equipos.",
    audience: ["organizaciones"],
    accent: "green",
    details: [
      "Levantamiento de información sobre clima, cultura y bienestar organizacional.",
      "Informes con recomendaciones accionables.",
      "[POR DEFINIR] Metodologías, plazos y formato de reportes.",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Pilares de la marca — se muestran en la sección "Nuestra forma de
 * entender el bienestar" y en la página Nosotros.
 */
export const pillars: Pillar[] = [
  {
    title: "Salud",
    description:
      "Cuidar la salud mental como parte esencial de una vida equilibrada.",
    icon: "brain",
    accent: "blue",
  },
  {
    title: "Bienestar",
    description:
      "Generar espacios de cuidado, calma y calidad de vida para personas y equipos.",
    icon: "heart",
    accent: "green",
  },
  {
    title: "Desarrollo",
    description:
      "Acompañar procesos de crecimiento personal, profesional y organizacional.",
    icon: "compass",
    accent: "orange",
  },
  {
    title: "Educación",
    description:
      "Compartir conocimiento a través de talleres, formación y aprendizaje continuo.",
    icon: "graduation",
    accent: "ink",
  },
  {
    title: "Conexión",
    description:
      "Tender puentes entre personas, entornos y organizaciones. Ese es el nexo.",
    icon: "handshake",
    accent: "blue",
  },
];
