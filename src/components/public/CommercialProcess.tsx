import { siteContent } from "@/lib/site-content";

export function CommercialProcess() {
  return (
    <section className="border-y border-[#D6D9DC] bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#C81010]">
            Proceso comercial
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#4A4F55]">
            De la solicitud tecnica al seguimiento comercial
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4A4F55]">
            Un flujo pensado para ordenar antecedentes, evaluar condiciones de terreno,
            cotizar con contexto y sostener el seguimiento comercial.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.process.map((item) => (
            <article key={item.step} className="rounded-lg border border-[#D6D9DC] bg-[#F4F5F7] p-5">
              <p className="text-sm font-semibold text-[#C81010]">{item.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-[#4A4F55]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4A4F55]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
