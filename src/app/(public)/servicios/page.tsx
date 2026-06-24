import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

const services = [
  "Construccion y obras menores",
  "Fabricacion de estructuras metalicas",
  "Soldadura especializada",
  "Montaje en terreno",
  "Mantencion y reparacion metalurgica",
  "Soporte tecnico para proyectos comerciales",
];

export default function ServicesPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Servicios"
        title="Capacidades para proyectos de construccion y metalurgia"
        description="Listado inicial de servicios preparado para SEO, captacion comercial y futuras fichas de detalle por especialidad."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service} className="rounded-lg border border-zinc-200 bg-white p-5">
            <h2 className="text-base font-semibold text-zinc-950">{service}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Placeholder para descripcion, alcance, materiales, tiempos y criterios de cotizacion.
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
