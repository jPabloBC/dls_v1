import type { Metadata } from "next";
import { QuoteFormMock } from "@/components/public/QuoteFormMock";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cotizar | MONTAJE DSL",
  description:
    "Maqueta de solicitud de cotización para proyectos de MONTAJE DSL en montaje industrial, soldadura, mantenimiento y estructuras metálicas.",
  keywords: [
    "MONTAJE DSL",
    "cotizar estructuras metálicas",
    "cotización soldadura",
    "cotización montaje industrial",
    "mantenimiento industrial",
  ],
};

export default function QuotePage() {
  return (
    <Section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <PageHeader
        eyebrow="Cotizar"
        title="Solicitud de cotización"
        description="Maqueta visual para capturar datos de proyectos de montaje industrial, estructuras metálicas, soldadura y mantenimiento. La integración de envío queda pendiente."
      />
      <QuoteFormMock />
    </Section>
  );
}
