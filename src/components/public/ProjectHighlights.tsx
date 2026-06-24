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
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            Proyectos destacados
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
            Referencias preparadas para casos reales
          </h2>
        </div>
        {showLink ? (
          <Link href="/proyectos" className="text-sm font-semibold text-zinc-950 hover:text-orange-700">
            Revisar portafolio
          </Link>
        ) : null}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {siteContent.projects.map((project) => (
          <article key={project.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-32 items-end rounded-md bg-[linear-gradient(135deg,#27272a,#52525b)] p-4">
              <span className="rounded bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-950">
                {project.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-950">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
