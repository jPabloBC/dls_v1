import Link from "next/link";
import { publicNavigation } from "@/lib/navigation";
import { siteContent } from "@/lib/site-content";

export function PublicFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-base font-semibold">{siteContent.company.fullName}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
            {siteContent.company.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Servicios</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {siteContent.services.slice(0, 4).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contacto</p>
          <address className="mt-3 space-y-2 text-sm not-italic text-zinc-300">
            <p>{siteContent.contact.email}</p>
            <p>{siteContent.contact.phone}</p>
            <p>{siteContent.contact.location}</p>
          </address>
          <nav aria-label="Navegacion inferior" className="mt-5 flex flex-wrap gap-3 text-sm">
            {publicNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-zinc-300 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/admin" className="text-zinc-500 hover:text-zinc-300">
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
