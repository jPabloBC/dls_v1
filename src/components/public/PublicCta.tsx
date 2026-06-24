import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function PublicCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-zinc-950 p-8 text-white sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">{siteContent.cta.quoteTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300">
              {siteContent.cta.quoteText}
            </p>
          </div>
          <Link
            href="/cotizar"
            className="rounded-md bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-zinc-950 hover:bg-orange-400"
          >
            {siteContent.cta.primary}
          </Link>
        </div>
      </div>
    </section>
  );
}
