import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

const highlights = [
  "Construccion y montaje de estructuras metalicas",
  "Servicios de soldadura para proyectos industriales",
  "Soluciones metalurgicas para obras comerciales",
];

export default function HomePage() {
  return (
    <>
      <Section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <PageHeader
            eyebrow="Construccion, metalurgia y soldadura"
            title="Soluciones tecnicas para obras y estructuras metalicas"
            description="Base digital para presentar servicios, captar solicitudes de cotizacion y preparar una operacion comercial ordenada desde el primer contacto."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cotizar"
              className="rounded-md bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Solicitar cotizacion
            </Link>
            <Link
              href="/servicios"
              className="rounded-md border border-zinc-300 px-5 py-3 text-center text-sm font-semibold text-zinc-950"
            >
              Ver servicios
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-950">Enfoque comercial</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-zinc-600">
            {highlights.map((highlight) => (
              <li key={highlight} className="border-l-4 border-orange-600 pl-4">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section className="grid gap-5 md:grid-cols-3">
        {["Obras", "Taller", "Ventas"].map((item) => (
          <article key={item} className="rounded-lg border border-zinc-200 bg-white p-6">
            <h2 className="text-base font-semibold text-zinc-950">{item}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Espacio preparado para contenido comercial, casos y flujos futuros de captacion.
            </p>
          </article>
        ))}
      </Section>
    </>
  );
}
