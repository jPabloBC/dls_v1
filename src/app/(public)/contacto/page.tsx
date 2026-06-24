import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <Section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <PageHeader
        eyebrow="Contacto"
        title="Conversemos sobre tu proyecto"
        description="Maqueta inicial del formulario de contacto. Mas adelante alimentara el inbox comercial y el CRM de contactos."
      />
      <form className="rounded-lg border border-zinc-200 bg-white p-6">
        <div className="grid gap-5">
          <label className="text-sm font-medium text-zinc-700">
            Nombre
            <input className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-zinc-700">
            Email
            <input type="email" className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-zinc-700">
            Mensaje
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
