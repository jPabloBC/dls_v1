import Link from "next/link";
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
          <article key={project.title} className="flex h-full flex-col rounded-lg border border-[#D6D9DC] bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-32 items-end rounded-md border border-[#D6D9DC] bg-[#F4F5F7] p-4">
              <span className="rounded bg-[#C81010] px-3 py-1 text-xs font-semibold text-white">
                {project.category}
              </span>
            </div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-[#D6D9DC] px-3 py-1 text-xs font-semibold text-[#4A4F55]">
                {project.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[#4A4F55]">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#4A4F55]">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
