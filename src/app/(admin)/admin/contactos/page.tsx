import { EmptyState } from "@/components/ui/EmptyState";

export default function AdminContactsPage() {
  return (
    <EmptyState
      title="Contactos pendientes"
      description="Aqui se administrara la base de clientes, empresas, encargados de obra y prospectos comerciales."
      actionLabel="Agregar contacto futuro"
    />
  );
}
