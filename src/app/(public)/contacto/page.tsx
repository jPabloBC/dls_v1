import type { Metadata } from "next";
import { ContactFormMock } from "@/components/public/ContactFormMock";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contacto | MONTAJE DSL",
  description:
    "Contacto comercial de MONTAJE DSL para consultas sobre montaje industrial, estructuras metalicas, soldadura y mantenimiento.",
  keywords: [
    "MONTAJE DSL",
    "contacto montaje industrial",
    "contacto soldadura",
    "mantenimiento industrial",
    "estructuras metalicas",
  ],
};

export default function ContactPage() {
  return (
    <Section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <PageHeader
          eyebrow="Contacto"
          title="Conversemos sobre tu proyecto"
          description="Maqueta inicial para consultas comerciales de montaje industrial, soldadura, estructuras metalicas y mantenimiento."
        />
        <div className="mt-8 rounded-lg border border-[#D6D9DC] bg-white p-6 text-sm leading-6 text-[#4A4F55]">
          <p className="font-semibold text-[#4A4F55]">Datos placeholder</p>
          <p className="mt-3">{siteContent.contact.email}</p>
          <p>{siteContent.contact.phone}</p>
          <p>{siteContent.contact.hours}</p>
        </div>
      </div>
      <ContactFormMock />
    </Section>
  );
}
