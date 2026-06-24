import type { Metadata } from "next";
import { ServicesOverview } from "@/components/public/ServicesOverview";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Servicios | MONTAJE DSL",
  description:
    "Servicios de MONTAJE DSL en estructuras metalicas, soldadura industrial, montaje estructural, mantencion, obras menores y apoyo tecnico.",
  keywords: [
    "MONTAJE DSL",
    "estructuras metalicas",
    "soldadura industrial",
    "montaje estructural",
    "mantencion industrial",
    "obras menores",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
            Servicios
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#4A4F55] sm:text-4xl">
            Servicios para montaje industrial, taller y terreno
          </h1>
          <p className="mt-4 text-base leading-7 text-[#4A4F55] sm:text-lg">
            Capacidades principales para clientes que necesitan estructuras metalicas,
            soldadura, montaje, mantencion y apoyo tecnico con respuesta precisa.
          </p>
        </div>
      </Section>
      <ServicesOverview showAll />
    </>
  );
}
