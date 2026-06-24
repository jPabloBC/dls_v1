export function ContactFormMock() {
  return (
    <form className="rounded-lg border border-[#D6D9DC] bg-white p-5 shadow-sm sm:p-6">
      <div
        id="contact-form-status"
        className="rounded-md border border-[#E54848] bg-[#F4F5F7] px-4 py-3 text-sm leading-6 text-[#4A4F55]"
      >
        Formulario visual pendiente de integracion con backend.
      </div>
      <div className="mt-6 grid gap-5">
        <label htmlFor="contact-name" className="text-sm font-medium text-[#4A4F55]">
          Nombre
          <input
            id="contact-name"
            name="name"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
            aria-describedby="contact-form-status"
          />
        </label>
        <label htmlFor="contact-email" className="text-sm font-medium text-[#4A4F55]">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          />
        </label>
        <label htmlFor="contact-phone" className="text-sm font-medium text-[#4A4F55]">
          Telefono
          <input
            id="contact-phone"
            name="phone"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          />
        </label>
        <label htmlFor="contact-channel" className="text-sm font-medium text-[#4A4F55]">
          Canal preferido
          <select
            id="contact-channel"
            name="preferredChannel"
            className="mt-2 w-full rounded-md border border-[#D6D9DC] px-3 py-2"
          >
            <option>Email</option>
            <option>Telefono</option>
            <option>WhatsApp futuro</option>
          </select>
        </label>
        <label htmlFor="contact-message" className="text-sm font-medium text-[#4A4F55]">
          Mensaje
          <textarea
            id="contact-message"
            name="message"
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
