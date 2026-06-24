import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function QuotePage() {
  return (
    <Section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <PageHeader
        eyebrow="Cotizar"
        title="Solicitud de cotizacion"
        description="Maqueta visual para capturar datos de proyectos de construccion, metalurgia, soldadura y estructuras metalicas. El envio funcional se implementara en una etapa posterior."
      />
      <form className="rounded-lg border border-zinc-200 bg-white p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium text-zinc-700">
            Nombre
            <input className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-zinc-700">
            Empresa
            <input className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-zinc-700">
            Email
            <input type="email" className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-zinc-700">
            Telefono
            <input className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-zinc-700 sm:col-span-2">
            Tipo de servicio
            <select className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2">
              <option>Construccion</option>
              <option>Metalurgia</option>
              <option>Soldadura</option>
              <option>Estructuras metalicas</option>
            </select>
          </label>
          <label className="text-sm font-medium text-zinc-700 sm:col-span-2">
            Descripcion del proyecto
            <textarea className="mt-2 min-h-32 w-full rounded-md border border-zinc-300 px-3 py-2" />
          </label>
        </div>
        <button
          type="button"
          className="mt-6 rounded-md bg-zinc-950 px-5 py-3 text-sm font-semibold text-white"
        >
          Envio no habilitado
        </button>
      </form>
    </Section>
  );
}
