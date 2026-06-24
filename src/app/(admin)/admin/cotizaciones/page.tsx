import { EmptyState } from "@/components/ui/EmptyState";

export default function AdminQuotesPage() {
  return (
    <EmptyState
      title="Cotizaciones sin datos"
      description="Este espacio preparara solicitudes, versiones de propuesta, estados y seguimientos de cotizacion."
      actionLabel="Nueva cotizacion futura"
    />
  );
}
