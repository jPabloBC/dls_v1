import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: proteger esta seccion con autenticacion y roles antes de produccion.
  return <AdminShell>{children}</AdminShell>;
}
