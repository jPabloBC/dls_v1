import Link from "next/link";
import { siteContent } from "@/lib/site-content";

type ServicesOverviewProps = {
  showAll?: boolean;
};

export function ServicesOverview({ showAll = false }: ServicesOverviewProps) {
  const services = showAll ? siteContent.services : siteContent.services.slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            Servicios principales
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
            Capacidades para resolver en taller y terreno
          </h2>
        </div>
        {!showAll ? (
          <Link href="/servicios" className="text-sm font-semibold text-zinc-950 hover:text-orange-700">
            Ver todos los servicios
          </Link>
        ) : null}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-950">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
