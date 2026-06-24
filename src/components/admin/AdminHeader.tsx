export function AdminHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-500">Area privada</p>
          <h1 className="text-xl font-semibold text-zinc-950">Gestion comercial</h1>
        </div>
        <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          Acceso temporal sin autenticacion
        </p>
      </div>
    </header>
  );
}
