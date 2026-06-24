import { siteContent } from "@/lib/site-content";

export function QuoteFormMock() {
  return (
    <form className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
      <div
        id="quote-form-status"
        className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900"
      >
        Integracion de envio pendiente. Este formulario es solo una maqueta visual.
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label htmlFor="quote-name" className="text-sm font-medium text-zinc-700">
          Nombre
          <input
            id="quote-name"
            name="name"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
            aria-describedby="quote-form-status"
          />
        </label>
        <label htmlFor="quote-company" className="text-sm font-medium text-zinc-700">
          Empresa
          <input
            id="quote-company"
            name="company"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
        <label htmlFor="quote-phone" className="text-sm font-medium text-zinc-700">
          Telefono
          <input
            id="quote-phone"
            name="phone"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
        <label htmlFor="quote-email" className="text-sm font-medium text-zinc-700">
          Email
          <input
            id="quote-email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
        <label htmlFor="quote-service" className="text-sm font-medium text-zinc-700">
          Tipo de servicio
          <select
            id="quote-service"
            name="serviceType"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          >
            {siteContent.services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
        </label>
        <label htmlFor="quote-location" className="text-sm font-medium text-zinc-700">
          Ubicacion del proyecto
          <input
            id="quote-location"
            name="projectLocation"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
        <label htmlFor="quote-urgency" className="text-sm font-medium text-zinc-700">
          Urgencia
          <select
            id="quote-urgency"
            name="urgency"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          >
            <option>Por evaluar</option>
            <option>Esta semana</option>
            <option>Este mes</option>
            <option>Planificacion futura</option>
          </select>
        </label>
        <div className="text-sm font-medium text-zinc-700">
          <span id="quote-files-label">Adjuntar archivos</span>
          <div
            role="group"
            aria-labelledby="quote-files-label"
            className="mt-2 rounded-md border border-dashed border-zinc-300 px-3 py-6 text-center text-sm text-zinc-500"
          >
            Carga de archivos pendiente
          </div>
        </div>
        <label htmlFor="quote-description" className="text-sm font-medium text-zinc-700 sm:col-span-2">
          Descripcion del requerimiento
          <textarea
            id="quote-description"
            name="description"
            className="mt-2 min-h-36 w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
      </div>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="mt-6 w-full rounded-md bg-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-600 sm:w-auto"
      >
        Envio pendiente de integracion
      </button>
    </form>
  );
}
