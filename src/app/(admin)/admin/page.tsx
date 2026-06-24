const metrics = [
  {
    label: "Leads nuevos",
    value: "0",
    description: "Prospectos captados desde formularios publicos.",
  },
  {
    label: "Cotizaciones pendientes",
    value: "0",
    description: "Solicitudes listas para priorizacion comercial.",
  },
  {
    label: "Mensajes recibidos",
    value: "0",
    description: "Contactos entrantes por revisar en el inbox.",
  },
  {
    label: "Seguimientos comerciales",
    value: "0",
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
    </div>
  );
}
