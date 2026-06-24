import { mockContacts } from "@/modules/contacts/mock-data";

// TODO: reemplazar mocks por consultas seguras a Supabase.
// TODO: proteger con autenticacion y roles.
// TODO: agregar auditoria de creacion/edicion/eliminacion.

export default function AdminContactsPage() {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Contactos</p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Base comercial inicial</h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Contactos mock asociados a solicitudes de construccion, metalurgia y soldadura.
        </p>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {mockContacts.map((contact) => (
          <article key={contact.id} className="rounded-lg border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              {contact.type}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-950">{contact.name}</h3>
            <p className="mt-1 text-sm text-zinc-600">{contact.companyName}</p>
            <dl className="mt-4 space-y-2 text-sm text-zinc-600">
              <div>
                <dt className="font-medium text-zinc-950">Email</dt>
                <dd>{contact.email}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-950">Telefono</dt>
                <dd>{contact.phone}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-950">Canal preferido</dt>
                <dd>{contact.preferredChannel}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
