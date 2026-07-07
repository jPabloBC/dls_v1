import type { Metadata } from "next";
import { ContactFormMock } from "@/components/public/ContactFormMock";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contacto | MONTAJE DSL",
  description:
    "Contacto comercial de MONTAJE DSL para consultas sobre montaje industrial, estructuras metálicas, soldadura y mantenimiento.",
  keywords: [
    "MONTAJE DSL",
    "contacto montaje industrial",
    "contacto soldadura",
    "mantenimiento industrial",
    "estructuras metálicas",
  ],
};

export default function ContactPage() {
  return (
    <Section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <PageHeader
          eyebrow="Contacto"
          title="Conversemos sobre tu proyecto"
          description="Maqueta inicial para consultas comerciales de montaje industrial, soldadura, estructuras metálicas y mantenimiento."
        />
        <div className="mt-8 rounded-sm border border-[#D6D9DC] bg-white p-6 text-sm leading-6 text-[#4A4F55]">
          <Badge className="rounded-sm bg-[#C81010] text-white hover:bg-[#9A0D0D]">
            Datos de contacto DSL
          </Badge>
          <p className="mt-4 font-semibold text-[#4A4F55]">Datos de referencia</p>
          <p className="mt-3">{siteContent.contact.email}</p>
          <p>{siteContent.contact.phone}</p>
          <p>{siteContent.contact.hours}</p>
          <Separator className="my-5 bg-[#D6D9DC]" />
          <p className="text-xs font-semibold uppercase tracking-wide text-[#8C9197]">
            Canales preparados
          </p>
          <p className="mt-2">Formulario, teléfono, correo electrónico y futura integración WhatsApp.</p>
        </div>
      </div>
      <ContactFormMock />
    </Section>
  );
}
