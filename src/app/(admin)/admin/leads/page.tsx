import { mockContacts } from "@/modules/contacts/mock-data";
import { mockLeads } from "@/modules/leads/mock-data";

// TODO: reemplazar mocks por consultas seguras a Supabase.
// TODO: proteger con autenticacion y roles.
// TODO: agregar auditoria de creacion/edicion/eliminacion.

const contactById = new Map(mockContacts.map((contact) => [contact.id, contact]));

export default function AdminLeadsPage() {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Leads</p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Oportunidades entrantes</h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Lectura mock de solicitudes captadas por formulario, WhatsApp o contacto manual.
        </p>
      </div>
      <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 text-sm">
            <thead className="bg-zinc-50 text-left text-zinc-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Lead</th>
                <th className="px-4 py-3 font-semibold">Contacto</th>
                <th className="px-4 py-3 font-semibold">Servicio</th>
                <th className="px-4 py-3 font-semibold">Estado</th>
                <th className="px-4 py-3 font-semibold">Urgencia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {mockLeads.map((lead) => (
                <tr key={lead.id}>
                  <td className="px-4 py-4 font-medium text-zinc-950">{lead.title}</td>
                  <td className="px-4 py-4 text-zinc-600">{contactById.get(lead.contactId)?.name}</td>
                  <td className="px-4 py-4 text-zinc-600">{lead.serviceInterest}</td>
                  <td className="px-4 py-4 text-zinc-600">{lead.status}</td>
                  <td className="px-4 py-4 text-zinc-600">{lead.urgency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
