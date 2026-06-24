import Link from "next/link";
import { publicNavigation } from "@/lib/navigation";

export function PublicFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <p className="text-base font-semibold">DLS Construccion y Metalurgia</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
            Servicios de construccion, metalurgia, soldadura y estructuras metalicas para
            proyectos industriales, comerciales y habitacionales.
          </p>
        </div>
        <nav aria-label="Navegacion inferior" className="flex flex-wrap gap-3 text-sm">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-zinc-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
