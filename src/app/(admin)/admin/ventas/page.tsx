import { mockContacts } from "@/modules/contacts/mock-data";
import { mockCommercialTasks, mockOpportunities } from "@/modules/sales/mock-data";

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

export default function AdminSalesPage() {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Ventas</p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Pipeline y tareas</h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Seguimiento mock de oportunidades, valores estimados y tareas comerciales pendientes.
        </p>
      </div>
      <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-lg border border-zinc-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-zinc-950">Oportunidades</h3>
          <div className="mt-4 space-y-4">
            {mockOpportunities.map((opportunity) => (
              <article key={opportunity.id} className="rounded-md border border-zinc-100 bg-zinc-50 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <div>
                    <p className="font-medium text-zinc-950">{opportunity.title}</p>
                    <p className="mt-1 text-sm text-zinc-600">
                      {contactById.get(opportunity.contactId)?.companyName}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-zinc-950">
                    {formatCurrency(opportunity.estimatedValue)}
                  </p>
                </div>
                <p className="mt-3 text-sm text-zinc-600">
                  Estado: {opportunity.status} · Etapa: {opportunity.stage}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="rounded-lg border border-zinc-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-zinc-950">Tareas proximas</h3>
          <div className="mt-4 space-y-3">
            {mockCommercialTasks.map((task) => (
              <article key={task.id} className="rounded-md border border-zinc-100 bg-zinc-50 p-4">
                <p className="font-medium text-zinc-950">{task.title}</p>
                <p className="mt-1 text-sm text-zinc-600">
                  {task.status} · {new Date(task.dueAt).toLocaleString("es-CL")}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
