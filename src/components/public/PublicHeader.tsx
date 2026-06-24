import Link from "next/link";
import { publicNavigation } from "@/lib/navigation";
import { siteContent } from "@/lib/site-content";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-zinc-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-950 text-sm font-semibold text-white">
            {siteContent.company.name}
          </span>
          <span>
            <span className="block text-base font-semibold">{siteContent.company.fullName}</span>
            <span className="block text-xs font-medium text-zinc-500">
              Obras, soldadura y estructuras
            </span>
          </span>
        </Link>
        <nav aria-label="Navegacion publica" className="flex flex-wrap gap-2 text-sm">
          {publicNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
