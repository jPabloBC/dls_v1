export function ContactFormMock() {
  return (
    <form className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
      <div
        id="contact-form-status"
        className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900"
      >
        Envio real pendiente. Mas adelante este formulario alimentara el inbox comercial.
      </div>
      <div className="mt-6 grid gap-5">
        <label htmlFor="contact-name" className="text-sm font-medium text-zinc-700">
          Nombre
          <input
            id="contact-name"
            name="name"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
            aria-describedby="contact-form-status"
          />
        </label>
        <label htmlFor="contact-email" className="text-sm font-medium text-zinc-700">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
        <label htmlFor="contact-phone" className="text-sm font-medium text-zinc-700">
          Telefono
          <input
            id="contact-phone"
            name="phone"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
        <label htmlFor="contact-channel" className="text-sm font-medium text-zinc-700">
          Canal preferido
          <select
            id="contact-channel"
            name="preferredChannel"
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2"
          >
            <option>Email</option>
            <option>Telefono</option>
            <option>WhatsApp futuro</option>
          </select>
        </label>
        <label htmlFor="contact-message" className="text-sm font-medium text-zinc-700">
          Mensaje
          <textarea
            id="contact-message"
            name="message"
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
