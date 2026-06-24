import type { Metadata } from "next";
import { ProjectHighlights } from "@/components/public/ProjectHighlights";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Proyectos | MONTAJE DSL",
  description:
    "Proyectos placeholder de MONTAJE DSL para montaje industrial, estructuras metálicas, soldadura, mantención y soluciones a medida.",
  keywords: [
    "MONTAJE DSL",
    "proyectos industriales",
    "estructuras metálicas",
    "montaje industrial",
    "soldadura industrial",
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Proyectos"
          title="Referencias de montaje y estructuras"
          description="Proyectos placeholder para ordenar futuras referencias de montaje industrial, estructuras metálicas, soldadura y mantenimiento."
        />
      </Section>
      <ProjectHighlights showLink={false} />
    </>
  );
}
