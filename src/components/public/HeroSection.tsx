import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-300">
            {siteContent.company.industry}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Soluciones tecnicas para obras, soldadura y estructuras metalicas
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            {siteContent.company.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cotizar"
              className="rounded-md bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-zinc-950 hover:bg-orange-400"
            >
              {siteContent.cta.primary}
            </Link>
            <Link
              href="/servicios"
              className="rounded-md border border-zinc-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-zinc-900"
            >
              {siteContent.cta.secondary}
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Base comercial
          </p>
          <dl className="mt-6 grid gap-5">
            {[
              ["Rubro", "Construccion y metalurgia"],
              ["Atencion", "Solicitudes y cotizaciones"],
              ["Preparado para", "CRM, inbox y seguimiento"],
            ].map(([label, value]) => (
              <div key={label} className="border-l-4 border-orange-500 pl-4">
                <dt className="text-sm text-zinc-400">{label}</dt>
                <dd className="mt-1 text-lg font-semibold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
