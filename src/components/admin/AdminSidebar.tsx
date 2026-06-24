import Link from "next/link";
import { adminNavigation } from "@/lib/navigation";

export function AdminSidebar() {
  return (
    <aside className="border-b border-zinc-800 bg-zinc-950 px-4 py-4 text-white lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r lg:px-5">
      <Link href="/admin" className="block text-base font-semibold">
        Panel Comercial
      </Link>
      <nav aria-label="Navegacion administrativa" className="mt-6 flex flex-wrap gap-2 lg:flex-col">
        {adminNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
