import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteContent } from "@/lib/site-content";

type ProjectHighlightsProps = {
  showLink?: boolean;
};

export function ProjectHighlights({ showLink = true }: ProjectHighlightsProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
            Proyectos destacados
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#4A4F55] sm:text-3xl">
            Referencias preparadas para obras industriales
          </h2>
        </div>
        {showLink ? (
          <Link href="/proyectos" className="text-sm font-semibold text-[#C81010] hover:text-[#9A0D0D]">
            Revisar portafolio
          </Link>
        ) : null}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {siteContent.projects.map((project) => (
          <Card key={project.title} className="rounded-sm border-[#D6D9DC] bg-white shadow-none">
            <CardHeader className="border-b border-[#D6D9DC] bg-[#F4F5F7]">
              <div className="flex items-start justify-between gap-4">
                <Badge className="rounded-sm bg-[#C81010] text-white hover:bg-[#9A0D0D]">
                  {project.code}
                </Badge>
                <span className="text-xs font-semibold uppercase tracking-wide text-[#8C9197]">
                  {project.status}
                </span>
              </div>
              <CardTitle className="text-lg font-semibold text-[#4A4F55]">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-[#4A4F55]">{project.description}</p>
              <Separator className="my-4 bg-[#D6D9DC]" />
              <dl className="grid gap-3 text-sm">
                <div>
                  <dt className="font-semibold text-[#8C9197]">Tipo</dt>
                  <dd className="text-[#4A4F55]">{project.category}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#8C9197]">Alcance</dt>
                  <dd className="text-[#4A4F55]">{project.scope}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#8C9197]">Material / especialidad</dt>
                  <dd className="text-[#4A4F55]">{project.material}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
