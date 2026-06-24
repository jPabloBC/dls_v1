import type { Metadata } from "next";
import { ServicesOverview } from "@/components/public/ServicesOverview";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de fabricacion de estructuras metalicas, soldadura industrial, montaje estructural, mantencion, obras menores y apoyo tecnico.",
  keywords: [
    "fabricacion de estructuras metalicas",
    "soldadura industrial",
    "montaje estructural",
    "mantencion metalurgica",
    "obras menores",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            Servicios
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-950 sm:text-4xl">
            Servicios para obras, taller y terreno
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
            Capacidades principales para clientes que necesitan fabricacion metalica,
            soldadura, montaje, mantencion y apoyo tecnico con enfoque comercial claro.
          </p>
        </div>
      </Section>
      <ServicesOverview showAll />
    </>
  );
}
