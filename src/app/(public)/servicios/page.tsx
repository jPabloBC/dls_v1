import type { Metadata } from "next";
import Image from "next/image";
import { ServicesOverview } from "@/components/public/ServicesOverview";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Servicios | MONTAJE DSL",
  description:
    "Servicios de MONTAJE DSL en estructuras metálicas, piping y piezas especiales.",
  keywords: [
    "MONTAJE DSL",
    "estructuras metálicas",
    "piping",
    "piezas especiales",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <div className="relative rounded-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
              Servicios
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-[#4A4F55] sm:text-4xl">
              Servicios para montaje industrial, taller y terreno
            </h1>
            <p className="mt-4 text-base leading-7 text-[#4A4F55] sm:text-lg">
              Capacidades principales para clientes que necesitan estructuras metálicas,
              piping y piezas especiales con respuesta precisa.
            </p>
          </div>
          <Image
            src="/brand/dls_icon.png"
            alt=""
            width={260}
            height={260}
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-1/2 hidden h-48 w-48 -translate-y-1/2 object-contain opacity-10 md:block lg:right-12 lg:h-56 lg:w-56"
          />
        </div>
      </Section>
      <ServicesOverview showAll />
    </>
  );
}
