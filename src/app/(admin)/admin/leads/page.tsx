import { EmptyState } from "@/components/ui/EmptyState";

export default function AdminLeadsPage() {
  return (
    <EmptyState
      title="Leads sin registros"
      description="Este modulo recibira oportunidades captadas desde cotizaciones, contacto, campanas y futuros canales comerciales."
      actionLabel="Crear lead futuro"
    />
  );
}
