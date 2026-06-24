import Link from "next/link";
import { BrandLogo } from "@/components/public/BrandLogo";
import { siteContent } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section className="border-b border-[#D6D9DC] bg-[#F4F5F7]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
            {siteContent.company.industry}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[#4A4F55] sm:text-5xl lg:text-6xl">
            Estructuras que construyen el futuro
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#4A4F55] sm:text-lg">
            Soluciones integrales en estructuras metalicas, montaje industrial, soldadura y mantenimiento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cotizar"
              className="rounded-md bg-[#C81010] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#9A0D0D]"
            >
              {siteContent.cta.primary}
            </Link>
            <Link
              href="/servicios"
              className="rounded-md border border-[#C81010] px-5 py-3 text-center text-sm font-semibold text-[#C81010] hover:bg-white"
            >
              {siteContent.cta.secondary}
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-[#D6D9DC] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <BrandLogo variant="hero" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
                Fuerza, precision y confianza
              </p>
              <p className="mt-2 text-lg font-semibold text-[#4A4F55]">
                Montaje industrial con foco tecnico y respuesta comercial.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#8C9197]">
            Especialidades
          </p>
          <dl className="mt-6 grid gap-5">
            {[
              ["Montaje", "Estructuras y soluciones industriales"],
              ["Soldadura", "Reparacion, refuerzo y fabricacion"],
              ["Mantenimiento", "Continuidad operativa y soporte"],
            ].map(([label, value]) => (
              <div key={label} className="border-l-4 border-[#C81010] pl-4">
                <dt className="text-sm text-[#8C9197]">{label}</dt>
                <dd className="mt-1 text-lg font-semibold text-[#4A4F55]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
