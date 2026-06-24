import { CommercialProcess } from "@/components/public/CommercialProcess";
import { HeroSection } from "@/components/public/HeroSection";
import { ProjectHighlights } from "@/components/public/ProjectHighlights";
import { PublicCta } from "@/components/public/PublicCta";
import { ServicesOverview } from "@/components/public/ServicesOverview";
import { siteContent } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {siteContent.benefits.map((benefit) => (
            <article key={benefit} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
                Beneficio comercial
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-700">{benefit}</p>
            </article>
          ))}
        </div>
      </section>
      <CommercialProcess />
      <ProjectHighlights />
      <PublicCta />
    </>
  );
}
