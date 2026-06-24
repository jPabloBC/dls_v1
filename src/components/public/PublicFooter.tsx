import Link from "next/link";
import { BrandLogo } from "@/components/public/BrandLogo";
import { publicNavigation } from "@/lib/navigation";
import { siteContent } from "@/lib/site-content";

export function PublicFooter() {
  return (
    <footer className="border-t border-[#D6D9DC] bg-[#4A4F55] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo variant="footer" />
            <p className="text-base font-semibold">{siteContent.company.fullName}</p>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#F4F5F7]">
            {siteContent.company.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Servicios</p>
          <ul className="mt-3 space-y-2 text-sm text-[#F4F5F7]">
            {siteContent.services.slice(0, 4).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contacto</p>
          <address className="mt-3 space-y-2 text-sm not-italic text-[#F4F5F7]">
            <p>{siteContent.contact.email}</p>
            <p>{siteContent.contact.phone}</p>
            <p>{siteContent.contact.location}</p>
          </address>
          <nav aria-label="Navegacion inferior" className="mt-5 flex flex-wrap gap-3 text-sm">
            {publicNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-[#F4F5F7] hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/admin" className="text-[#D6D9DC] hover:text-white">
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
