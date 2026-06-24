import { siteContent } from "@/lib/site-content";

export function CommercialProcess() {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            Proceso comercial
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
            De la solicitud al seguimiento
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Un flujo pensado para ordenar informacion tecnica, cotizar con contexto y dejar
            preparado el seguimiento desde el panel privado.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.process.map((item) => (
            <article key={item.step} className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-semibold text-orange-700">{item.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-zinc-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
