import { mockContacts } from "@/modules/contacts/mock-data";
import { mockInboxMessages } from "@/modules/inbox/mock-data";

// TODO: reemplazar mocks por consultas seguras a Supabase.
// TODO: proteger con autenticacion y roles.
// TODO: conectar inbox con formularios, WhatsApp Business y chatbot.
// TODO: agregar auditoria de creacion/edicion/eliminacion.

const contactById = new Map(mockContacts.map((contact) => [contact.id, contact]));

export default function AdminInboxPage() {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Inbox</p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Mensajes comerciales</h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Mensajes mock recibidos desde formularios, WhatsApp y comunicaciones de seguimiento.
        </p>
      </div>
      <div className="mt-8 space-y-4">
        {mockInboxMessages.map((message) => (
          <article key={message.id} className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-700">{message.channel}</p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-950">
                  {message.subject ?? "Mensaje comercial"}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{contactById.get(message.contactId)?.name}</p>
              </div>
              <span className="rounded-md bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700">
                {message.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-600">{message.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
