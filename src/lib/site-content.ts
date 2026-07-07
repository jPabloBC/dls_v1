type ServiceImage = {
  src: string;
  alt: string;
};

type ServiceContent = {
  code: string;
  title: string;
  image: ServiceImage | null;
  carouselImages?: string[];
  description: string;
  applications: string[];
};

const servicesImageBaseUrl =
  "https://gbdoqxdldyszmfzqzmuk.supabase.co/storage/v1/object/public/dls/image/public/services";

export const siteContent = {
  company: {
    name: "MONTAJE DSL",
    fullName: "MONTAJE DSL",
    industry: "Montaje industrial, estructuras metálicas, soldadura y mantenimiento",
    description:
      "Soluciones integrales con fuerza, precisión y confianza para proyectos de estructuras metálicas, montaje industrial, soldadura y mantenimiento.",
  },
  contact: {
    email: "contacto@montajedsl.cl",
    phone: "+56 9 0000 0000",
    location: "Chile",
    hours: "Lunes a viernes, 09:00 a 18:00",
  },
  cta: {
    primary: "Solicitar cotización",
    secondary: "Ver servicios",
    quoteTitle: "Convierte tu requerimiento técnico en una cotización clara",
    quoteText:
      "MONTAJE DSL prepara una base comercial para levantar antecedentes, ordenar prioridades y dar seguimiento a proyectos de montaje, soldadura y mantenimiento.",
  },
  services: [
    {
      code: "DSL-EST-01",
      title: "Estructuras metálicas",
      image: null,
      carouselImages: Array.from(
        { length: 6 },
        (_, index) =>
          `${servicesImageBaseUrl}/estructura_${String(index + 1).padStart(2, "0")}.webp`
      ),
      description:
        "Fabricación y preparación de estructuras para galpones, plataformas, soportes, marcos y soluciones industriales a medida.",
      applications: ["Galpones", "Plataformas", "Soportes", "Ampliaciones"],
    },
    {
      code: "DSL-PIP-02",
      title: "Piping",
      image: null,
      carouselImages: Array.from(
        { length: 6 },
        (_, index) => `${servicesImageBaseUrl}/piping_${String(index + 1).padStart(2, "0")}.webp`
      ),
      description:
        "Fabricación, preparación y montaje de líneas, spooles, soportes y componentes de piping para aplicaciones industriales.",
      applications: ["Spooles", "Líneas", "Soportes", "Montaje"],
    },
    {
      code: "DSL-CAJ-03",
      title: "Cajones de traspaso",
      image: null,
      description:
        "Desarrollo de cajones, tolvas y elementos de traspaso para manejo de material, continuidad operativa y soluciones a medida.",
      applications: ["Tolvas", "Traspaso", "Revestimientos", "Ajuste"],
    },
    {
      code: "DSL-ESP-04",
      title: "Piezas especiales",
      image: null,
      carouselImages: Array.from(
        { length: 6 },
        (_, index) =>
          `${servicesImageBaseUrl}/especial_${String(index + 1).padStart(2, "0")}.webp`
      ),
      description:
        "Fabricación de componentes especiales, refuerzos, adaptadores y piezas metálicas según planos o requerimientos de terreno.",
      applications: ["Adaptadores", "Refuerzos", "Componentes", "Planos"],
    },
  ] as ServiceContent[],
  benefits: [
    "Respuesta comercial ordenada para solicitudes de montaje, fabricación y mantenimiento.",
    "Capacidad para integrar estructuras metálicas, soldadura y montaje en un mismo flujo técnico.",
    "Base preparada para seguimiento de contactos comerciales, cotizaciones y mensajes sin perder trazabilidad.",
    "Comunicación clara para evaluar alcance, prioridad, condiciones de terreno y plazos.",
  ],
  process: [
    {
      step: "01",
      title: "Levantamiento",
      description:
        "Se recopilan ubicación, tipo de servicio, urgencia, planos, medidas y antecedentes técnicos disponibles.",
    },
    {
      step: "02",
      title: "Evaluación técnica",
      description:
        "Se revisa el alcance para separar materiales, mano de obra, montaje, riesgos y condiciones de terreno.",
    },
    {
      step: "03",
      title: "Cotización",
      description:
        "Se prepara una propuesta comercial clara, con partidas, condiciones, validez y próximos pasos.",
    },
    {
      step: "04",
      title: "Seguimiento",
      description:
        "El flujo queda listo para registrar mensajes, tareas, estados y oportunidades de venta.",
    },
  ],
  projects: [
    {
      code: "DSL-PROY-118",
      title: "Estructura metálica para ampliación industrial",
      category: "Fabricación y montaje",
      description:
        "Referencia inicial para levantamiento, fabricación y montaje de una ampliación productiva.",
      status: "Referencia futura",
      scope: "Levantamiento, fabricación y montaje",
      material: "Acero estructural",
    },
    {
      code: "DSL-PROY-204",
      title: "Mantención de componentes industriales",
      category: "Mantención y reparación",
      description:
        "Referencia inicial para reparación, refuerzo y soldadura en componentes de uso operativo.",
      status: "Trabajo técnico",
      scope: "Diagnóstico, refuerzo y terminación",
      material: "Componentes metálicos",
    },
    {
      code: "DSL-PROY-316",
      title: "Montaje estructural en zona de carga",
      category: "Obras menores",
      description:
        "Referencia inicial para montaje, ajuste y puesta en servicio de una solución metálica a medida.",
      status: "Planificación",
      scope: "Montaje, ajuste y puesta en servicio",
      material: "Perfiles y placas",
    },
  ],
};
