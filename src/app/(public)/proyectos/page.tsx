import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function ProjectsPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Proyectos"
        title="Portafolio de obras y estructuras"
        description="Seccion preparada para mostrar obras ejecutadas, tipos de estructura, desafios tecnicos y resultados comerciales."
      />
      <div className="mt-10">
        <EmptyState
          title="Portafolio pendiente de carga"
          description="Aqui se incorporaran proyectos destacados de construccion, soldadura, montaje y fabricacion metalica."
        />
      </div>
    </Section>
  );
}
