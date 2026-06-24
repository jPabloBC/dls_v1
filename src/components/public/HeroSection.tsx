import Link from "next/link";
import { BrandLogo } from "@/components/public/BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#D6D9DC] bg-[#F4F5F7]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(74,79,85,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(74,79,85,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute right-0 top-0 hidden h-40 w-[42%] border-b border-l border-[#D6D9DC] bg-[#C81010] opacity-95 [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] md:block" />
      <div className="absolute right-10 top-8 hidden h-px w-40 bg-white/60 md:block" />
      <div className="absolute right-20 top-16 hidden h-px w-24 bg-white/40 md:block" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <Badge className="rounded-sm bg-white px-3 py-1 text-[#C81010] ring-1 ring-[#D6D9DC] hover:bg-white">
            DSL-INDUSTRIAL-SYSTEM
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
          <div className="mt-8 border border-[#D6D9DC] bg-white/85 p-4">
            <div className="grid gap-3 text-xs font-semibold uppercase tracking-wide text-[#4A4F55] sm:grid-cols-[1fr_1fr_1fr]">
              <span className="border-l-2 border-[#C81010] pl-3">DSL-STRUCT-01</span>
              <span className="border-l-2 border-[#C81010] pl-3">MONTAJE INDUSTRIAL</span>
              <span className="border-l-2 border-[#C81010] pl-3">COTIZACIÓN TÉCNICA</span>
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
              <div key={item} className="border-l-2 border-[#C81010] bg-white/70 px-3 py-2">
                {item}
              </div>
            ))}
          </div>
        </div>
        <aside className="border border-[#D6D9DC] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-5">
            <BrandLogo variant="hero" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
                Panel técnico
              </p>
              <p className="mt-2 text-lg font-semibold text-[#4A4F55]">
                MONTAJE DSL
              </p>
            </div>
          </div>
          <Separator className="my-6 bg-[#D6D9DC]" />
          <div className="grid gap-3">
            {technicalPanel.map((item, index) => (
              <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4 border border-[#D6D9DC] bg-[#F4F5F7] p-3">
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
          <div className="mt-6 bg-[#4A4F55] p-4 text-white [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
            <p className="text-xs font-semibold uppercase tracking-wide">DSL-MOUNT-READY</p>
            <p className="mt-2 text-sm">Levantamiento, cotización y seguimiento técnico.</p>
          </div>
        </aside>
      </div>
      <div className="relative border-t border-[#D6D9DC] bg-white/90">
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
