import type { Metadata } from "next";
import { ProjectHighlights } from "@/components/public/ProjectHighlights";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos destacados placeholder para obras, estructuras metalicas, soldadura, mantencion y soluciones metalurgicas a medida.",
  keywords: [
    "proyectos metalicos",
    "obras industriales",
    "estructuras metalicas",
    "montaje metalico",
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Proyectos"
          title="Portafolio de obras y estructuras"
          description="Proyectos placeholder para ordenar futuras referencias comerciales sin usar imagenes reales todavia."
        />
      </Section>
      <ProjectHighlights showLink={false} />
    </>
  );
}
