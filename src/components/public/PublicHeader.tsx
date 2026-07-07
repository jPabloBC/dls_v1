"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/public/BrandLogo";
import { publicNavigation } from "@/lib/navigation";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function PublicHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-[#D6D9DC] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-[#4A4F55]">
          <BrandLogo variant="header" />
          <span className="min-w-0">
            <span className="block text-base font-semibold leading-5">{siteContent.company.fullName}</span>
            <span className="block text-xs font-medium text-[#8C9197]">
              Montaje, soldadura y estructuras
            </span>
          </span>
        </Link>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <nav aria-label="Navegacion publica" className="flex flex-wrap gap-2 text-sm">
            {publicNavigation.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 font-medium text-[#4A4F55] hover:bg-[#F4F5F7] hover:text-[#C81010]",
                    isActive && "text-[#C81010]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/cotizar"
            className="w-full rounded-sm bg-[#C81010] px-4 py-2 text-center text-sm font-semibold text-white hover:bg-[#9A0D0D] sm:w-auto"
          >
            Cotizar proyecto
          </Link>
        </div>
      </div>
    </header>
  );
}
