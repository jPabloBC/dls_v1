import { mockContacts } from "@/modules/contacts/mock-data";
import { mockInboxMessages } from "@/modules/inbox/mock-data";
import { mockLeads } from "@/modules/leads/mock-data";
import { mockQuotes } from "@/modules/quotes/mock-data";
import { mockCommercialTasks } from "@/modules/sales/mock-data";

// TODO: reemplazar mocks por consultas seguras a Supabase.
// TODO: agregar auditoria de creacion/edicion/eliminacion.
const pendingQuotes = mockQuotes.filter((quote) => quote.status === "draft" || quote.status === "sent");
const openTasks = mockCommercialTasks.filter((task) => task.status !== "completed" && task.status !== "cancelled");
const inboundMessages = mockInboxMessages.filter((message) => message.direction === "inbound");

const metrics = [
  {
    label: "Leads nuevos",
    value: String(mockLeads.filter((lead) => lead.status === "new").length),
    description: "Prospectos captados desde formularios publicos.",
  },
  {
    label: "Cotizaciones pendientes",
    value: String(pendingQuotes.length),
    description: "Solicitudes listas para priorizacion comercial.",
  },
  {
    label: "Mensajes recibidos",
    value: String(inboundMessages.length),
    description: "Contactos entrantes por revisar en el inbox.",
  },
  {
    label: "Seguimientos comerciales",
    value: String(openTasks.length),
    description: "Tareas futuras para avanzar oportunidades.",
  },
];

export default function AdminHomePage() {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Dashboard</p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Resumen comercial</h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Vista inicial para preparar el seguimiento de ventas, solicitudes de cotizacion,
          contactos e inbox de mensajes.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-lg border border-zinc-200 bg-white p-5">
            <p className="text-sm font-medium text-zinc-500">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold text-zinc-950">{metric.value}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{metric.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-lg border border-zinc-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-zinc-950">Proximos seguimientos</h3>
          <div className="mt-4 space-y-3">
            {openTasks.slice(0, 3).map((task) => (
              <article key={task.id} className="rounded-md border border-zinc-100 bg-zinc-50 p-4">
                <p className="font-medium text-zinc-950">{task.title}</p>
                <p className="mt-1 text-sm text-zinc-600">
                  Vence: {new Date(task.dueAt).toLocaleDateString("es-CL")} · Prioridad {task.priority}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="rounded-lg border border-zinc-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-zinc-950">Actividad comercial mock</h3>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-600">Contactos activos</dt>
              <dd className="font-semibold text-zinc-950">{mockContacts.length}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-600">Cotizaciones enviadas</dt>
              <dd className="font-semibold text-zinc-950">
                {mockQuotes.filter((quote) => quote.status === "sent").length}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-600">Mensajes convertidos</dt>
              <dd className="font-semibold text-zinc-950">
                {mockInboxMessages.filter((message) => message.status === "converted").length}
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
