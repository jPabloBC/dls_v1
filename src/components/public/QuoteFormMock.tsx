import { siteContent } from "@/lib/site-content";

export function QuoteFormMock() {
  return (
    <form className="rounded-lg border border-[#D6D9DC] bg-white p-5 shadow-sm sm:p-6">
      <div
        id="quote-form-status"
        className="rounded-md border border-[#E54848] bg-[#F4F5F7] px-4 py-3 text-sm leading-6 text-[#4A4F55]"
      >
        Formulario visual pendiente de integracion con backend.
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label htmlFor="quote-name" className="text-sm font-medium text-[#4A4F55]">
          Nombre
          <input
            id="quote-name"
            name="name"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
            aria-describedby="quote-form-status"
          />
        </label>
        <label htmlFor="quote-company" className="text-sm font-medium text-[#4A4F55]">
          Empresa
          <input
            id="quote-company"
            name="company"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          />
        </label>
        <label htmlFor="quote-phone" className="text-sm font-medium text-[#4A4F55]">
          Telefono
          <input
            id="quote-phone"
            name="phone"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          />
        </label>
        <label htmlFor="quote-email" className="text-sm font-medium text-[#4A4F55]">
          Email
          <input
            id="quote-email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          />
        </label>
        <label htmlFor="quote-service" className="text-sm font-medium text-[#4A4F55]">
          Tipo de servicio
          <select
            id="quote-service"
            name="serviceType"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          >
            {siteContent.services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
        </label>
        <label htmlFor="quote-location" className="text-sm font-medium text-[#4A4F55]">
          Ubicacion del proyecto
          <input
            id="quote-location"
            name="projectLocation"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          />
        </label>
        <label htmlFor="quote-urgency" className="text-sm font-medium text-[#4A4F55]">
          Urgencia
          <select
            id="quote-urgency"
            name="urgency"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          >
            <option>Por evaluar</option>
            <option>Esta semana</option>
            <option>Este mes</option>
            <option>Planificacion futura</option>
          </select>
        </label>
        <div className="text-sm font-medium text-[#4A4F55]">
          <span id="quote-files-label">Adjuntar archivos</span>
          <div
            role="group"
            aria-labelledby="quote-files-label"
            className="mt-2 rounded-md border border-dashed border-[#D6D9DC] px-3 py-6 text-center text-sm text-[#8C9197]"
          >
            Carga de archivos pendiente
          </div>
        </div>
        <label htmlFor="quote-description" className="text-sm font-medium text-[#4A4F55] sm:col-span-2">
          Descripcion del requerimiento
          <textarea
            id="quote-description"
            name="description"
            className="mt-2 min-h-36 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          />
        </label>
      </div>
      <button
        type="button"
        aria-disabled="true"
        className="mt-6 w-full rounded-md bg-[#C81010] px-5 py-3 text-sm font-semibold text-white hover:bg-[#9A0D0D] sm:w-auto"
      >
        Envio pendiente de integracion
      </button>
    </form>
  );
}
