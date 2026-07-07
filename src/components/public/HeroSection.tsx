import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/lib/site-content";

const technicalPanel = [
  {
    title: "Montaje industrial",
    description: "Planificación, coordinación y ejecución en terreno.",
  },
  {
    title: "Soldadura especializada",
    description: "Uniones, reparaciones y fabricación metálica.",
  },
  {
    title: "Estructuras metálicas",
    description: "Fabricación, refuerzo y montaje estructural.",
  },
  {
    title: "Mantenimiento",
    description: "Intervenciones preventivas y correctivas.",
  },
];

const quickServices = [
  "Estructuras metálicas",
  "Soldadura industrial",
  "Montaje estructural",
  "Mantenimiento",
];

const heroBackgroundImage =
  "https://gbdoqxdldyszmfzqzmuk.supabase.co/storage/v1/object/public/dls/image/public/background_dls.webp";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#D6D9DC] bg-[#F4F5F7]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(74,79,85,0.11)_1px,transparent_1px),linear-gradient(0deg,rgba(74,79,85,0.11)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute right-0 top-0 hidden h-44 w-[48%] border-b border-l border-white/30 bg-[#C81010] opacity-95 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] md:block" />
      <div className="absolute right-10 top-8 hidden h-px w-40 bg-white/60 md:block" />
      <div className="absolute right-20 top-16 hidden h-px w-24 bg-white/40 md:block" />
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20 xl:grid-cols-[0.82fr_1.18fr] xl:gap-14">
        <div className="max-w-4xl">
          <Badge className="rounded-sm bg-white px-3 py-1 text-[#C81010] ring-1 ring-[#D6D9DC] hover:bg-white">
            Sistema industrial DSL
          </Badge>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-[#C81010]">
            {siteContent.company.industry}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[#4A4F55] sm:text-5xl lg:text-6xl">
            Estructuras que construyen el futuro
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#4A4F55] sm:text-lg">
            Soluciones integrales en estructuras metálicas, montaje industrial, soldadura y mantenimiento.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4A4F55] sm:text-base">
            Levantamos, reforzamos y mantenemos soluciones metálicas para proyectos que
            requieren precisión técnica y cumplimiento en terreno.
          </p>
          <div className="mt-8 rounded-sm border border-[#D6D9DC] bg-white/85 p-4">
            <div className="grid gap-3 text-xs font-semibold uppercase tracking-wide text-[#4A4F55] sm:grid-cols-[1fr_1fr_1fr]">
              <span className="rounded-sm border-l-2 border-[#C81010] pl-3">DSL-EST-01</span>
              <span className="rounded-sm border-l-2 border-[#C81010] pl-3">MONTAJE INDUSTRIAL</span>
              <span className="rounded-sm border-l-2 border-[#C81010] pl-3">COTIZACIÓN TÉCNICA</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cotizar"
              className="rounded-sm bg-[#C81010] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#9A0D0D]"
            >
              {siteContent.cta.primary}
            </Link>
            <Link
              href="/servicios"
              className="rounded-sm border border-[#D6D9DC] bg-white px-5 py-3 text-center text-sm font-semibold text-[#4A4F55] shadow-[inset_4px_0_0_#C81010] hover:border-[#C81010] hover:text-[#C81010]"
            >
              {siteContent.cta.secondary}
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-xs font-semibold uppercase tracking-wide text-[#8C9197] sm:grid-cols-4">
            {["Fuerza", "Precisión", "Confianza", "Técnica"].map((item) => (
              <div key={item} className="rounded-sm border-l-2 border-[#C81010] bg-white/70 px-3 py-2">
                {item}
              </div>
            ))}
          </div>
        </div>
        <aside className="overflow-hidden rounded-sm border border-[#D6D9DC] bg-white shadow-sm">
          <div className="relative min-h-[340px] border-b border-[#D6D9DC] lg:min-h-[390px] xl:min-h-[430px]">
            <div
              className="absolute inset-0 scale-x-[-1] bg-cover bg-center"
              style={{ backgroundImage: `url(${heroBackgroundImage})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(48,53,58,0.06)_0%,rgba(48,53,58,0.14)_48%,rgba(48,53,58,0.76)_100%)]" />
            <div className="absolute left-0 top-0 h-24 w-[68%] bg-[#C81010]/95 [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]" />
            <div className="absolute left-6 top-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Panel técnico
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                MONTAJE DSL
              </p>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Montaje DSL preparado
              </p>
              <p className="mt-2 max-w-md text-lg font-semibold leading-7 text-white">
                Montaje industrial y estructuras metálicas en terreno.
              </p>
            </div>
          </div>
          <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-2">
            {technicalPanel.map((item, index) => (
              <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4 rounded-sm border border-[#D6D9DC] bg-white/75 p-3">
                <span className="text-sm font-semibold text-[#C81010]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#4A4F55]">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#4A4F55]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <div className="relative border-t border-white/35 bg-white/92 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-[#4A4F55] sm:px-6 md:flex-row md:flex-wrap md:items-center lg:px-8">
          {quickServices.map((service, index) => (
            <div key={service} className="flex items-center gap-3">
              <span className="text-[#C81010]">DSL-{String(index + 1).padStart(2, "0")}</span>
              <span>{service}</span>
              {index < quickServices.length - 1 ? (
                <span className="hidden h-5 w-px bg-[#D6D9DC] md:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
