export function ContactFormMock() {
  return (
    <form className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
        Envio real pendiente. Mas adelante este formulario alimentara el inbox comercial.
      </div>
      <div className="mt-6 grid gap-5">
        <label className="text-sm font-medium text-zinc-700">
          Nombre
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
        <label className="text-sm font-medium text-zinc-700">
          Canal preferido
          <select className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2">
            <option>Email</option>
            <option>Telefono</option>
            <option>WhatsApp futuro</option>
          </select>
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Mensaje
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
