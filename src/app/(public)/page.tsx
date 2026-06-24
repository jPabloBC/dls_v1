import type { Metadata } from "next";
import { CommercialProcess } from "@/components/public/CommercialProcess";
import { HeroSection } from "@/components/public/HeroSection";
import { ProjectHighlights } from "@/components/public/ProjectHighlights";
import { PublicCta } from "@/components/public/PublicCta";
import { ServicesOverview } from "@/components/public/ServicesOverview";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "MONTAJE DSL | Montaje industrial y estructuras metálicas",
  description:
    "MONTAJE DSL entrega soluciones integrales en estructuras metálicas, montaje industrial, soldadura y mantenimiento.",
  keywords: [
    "MONTAJE DSL",
    "montaje industrial",
    "soldadura",
    "estructuras metálicas",
    "mantenimiento industrial",
    "cotización de proyectos",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
            Criterios de trabajo
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#4A4F55] sm:text-3xl">
            Una operación comercial pensada para proyectos técnicos
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {siteContent.benefits.map((benefit) => (
            <Card key={benefit} className="rounded-sm border-[#D6D9DC] bg-white shadow-none">
              <CardContent>
                <Badge className="rounded-sm bg-[#F4F5F7] text-[#C81010] ring-1 ring-[#D6D9DC] hover:bg-[#F4F5F7]">
                  DSL-CRITERIA
                </Badge>
                <p className="mt-4 text-base leading-7 text-[#4A4F55]">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <CommercialProcess />
      <ProjectHighlights />
      <PublicCta />
    </>
  );
}
