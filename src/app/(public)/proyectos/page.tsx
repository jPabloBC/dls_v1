import { ProjectHighlights } from "@/components/public/ProjectHighlights";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

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
