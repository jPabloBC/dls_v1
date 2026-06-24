import { mockContacts } from "@/modules/contacts/mock-data";
import { mockQuotes } from "@/modules/quotes/mock-data";

// TODO: reemplazar mocks por consultas seguras a Supabase.
// TODO: proteger con autenticacion y roles.
// TODO: agregar auditoria de creacion/edicion/eliminacion.

const contactById = new Map(mockContacts.map((contact) => [contact.id, contact]));

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function AdminQuotesPage() {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Cotizaciones</p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Propuestas comerciales</h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Cotizaciones mock para estructuras metalicas, soldadura industrial y montaje.
        </p>
      </div>
      <div className="mt-8 grid gap-4 xl:grid-cols-2">
        {mockQuotes.map((quote) => (
          <article key={quote.id} className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-700">{quote.quoteNumber}</p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-950">{quote.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">
                  {contactById.get(quote.contactId)?.companyName}
                </p>
              </div>
              <span className="rounded-md bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700">
                {quote.status}
              </span>
            </div>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-zinc-500">Total</dt>
                <dd className="font-semibold text-zinc-950">{formatCurrency(quote.total)}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Valida hasta</dt>
                <dd className="font-semibold text-zinc-950">
                  {new Date(quote.validUntil).toLocaleDateString("es-CL")}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Moneda</dt>
                <dd className="font-semibold text-zinc-950">{quote.currency}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
