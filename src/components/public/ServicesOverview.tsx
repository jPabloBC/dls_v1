import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
            Servicios principales
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#4A4F55] sm:text-3xl">
            Capacidades para montaje, soldadura y mantenimiento
          </h2>
        </div>
        {!showAll ? (
          <Link href="/servicios" className="text-sm font-semibold text-[#C81010] hover:text-[#9A0D0D]">
            Ver todos los servicios
          </Link>
        ) : null}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="relative h-full rounded-sm border-[#D6D9DC] bg-white shadow-none before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#C81010]">
            <CardHeader>
              <Badge className="w-fit rounded-sm bg-[#F4F5F7] text-[#C81010] ring-1 ring-[#D6D9DC] hover:bg-[#F4F5F7]">
                {service.code}
              </Badge>
              <CardTitle className="text-lg font-semibold text-[#4A4F55]">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-[#4A4F55]">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.applications.map((application) => (
                  <span key={application} className="border border-[#D6D9DC] px-2 py-1 text-xs font-medium text-[#4A4F55]">
                    {application}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
