import { ContactFormMock } from "@/components/public/ContactFormMock";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <Section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <PageHeader
          eyebrow="Contacto"
          title="Conversemos sobre tu proyecto"
          description="Maqueta inicial del formulario de contacto. Mas adelante alimentara el inbox comercial y el CRM de contactos."
        />
        <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 text-sm leading-6 text-zinc-600">
          <p className="font-semibold text-zinc-950">Datos placeholder</p>
          <p className="mt-3">{siteContent.contact.email}</p>
          <p>{siteContent.contact.phone}</p>
          <p>{siteContent.contact.hours}</p>
        </div>
      </div>
      <ContactFormMock />
    </Section>
  );
}
