import { siteContent } from "@/lib/site-content";

export function QuoteFormMock() {
  return (
    <form className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
        Integracion de envio pendiente. Este formulario es solo una maqueta visual.
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-zinc-700">
          Nombre
          <input className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Empresa
          <input className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Telefono
          <input className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Email
          <input type="email" className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Tipo de servicio
          <select className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2">
            {siteContent.services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Ubicacion del proyecto
          <input className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Urgencia
          <select className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2">
            <option>Por evaluar</option>
            <option>Esta semana</option>
            <option>Este mes</option>
            <option>Planificacion futura</option>
          </select>
        </label>
        <div className="text-sm font-medium text-zinc-700">
          Adjuntar archivos
          <div className="mt-2 rounded-md border border-dashed border-zinc-300 px-3 py-6 text-center text-sm text-zinc-500">
            Carga de archivos pendiente
          </div>
        </div>
        <label className="text-sm font-medium text-zinc-700 sm:col-span-2">
          Descripcion del requerimiento
          <textarea className="mt-2 min-h-36 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </label>
      </div>
      <button
        type="button"
        disabled
        className="mt-6 rounded-md bg-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-600"
      >
        Envio pendiente de integracion
      </button>
    </form>
  );
}
