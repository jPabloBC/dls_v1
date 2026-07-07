import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/lib/site-content";

export function QuoteFormMock() {
  return (
    <Card className="rounded-sm border-[#D6D9DC] bg-white py-0 shadow-none">
      <CardHeader className="rounded-t-sm border-b border-[#D6D9DC] bg-[#F4F5F7] py-4">
        <Badge className="w-fit rounded-sm bg-[#C81010] text-white hover:bg-[#9A0D0D]">
          Solicitud DSL
        </Badge>
        <CardTitle className="text-xl font-semibold text-[#4A4F55]">
          Solicitud técnica de cotización
        </CardTitle>
      </CardHeader>
      <CardContent className="py-4">
        <form>
          <div
            id="quote-form-status"
            className="rounded-sm border border-[#E54848] bg-[#F4F5F7] px-4 py-3 text-sm leading-6 text-[#4A4F55]"
          >
            Formulario visual pendiente de integración con el sistema.
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label htmlFor="quote-name" className="text-sm font-medium text-[#4A4F55]">
              Nombre
              <Input
                id="quote-name"
                name="name"
                className="mt-2 h-10 rounded-sm border-[#D6D9DC]"
                aria-describedby="quote-form-status"
              />
            </label>
            <label htmlFor="quote-company" className="text-sm font-medium text-[#4A4F55]">
              Empresa
              <Input
                id="quote-company"
                name="company"
                className="mt-2 h-10 rounded-sm border-[#D6D9DC]"
              />
            </label>
            <label htmlFor="quote-phone" className="text-sm font-medium text-[#4A4F55]">
              Teléfono
              <Input
                id="quote-phone"
                name="phone"
                className="mt-2 h-10 rounded-sm border-[#D6D9DC]"
              />
            </label>
            <label htmlFor="quote-email" className="text-sm font-medium text-[#4A4F55]">
              Correo electrónico
              <Input
                id="quote-email"
                name="email"
                type="email"
                className="mt-2 h-10 rounded-sm border-[#D6D9DC]"
              />
            </label>
            <div className="sm:col-span-2">
              <Separator className="bg-[#D6D9DC]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[#8C9197]">
                Datos del proyecto
              </p>
            </div>
            <label htmlFor="quote-service" className="text-sm font-medium text-[#4A4F55]">
              Tipo de servicio
              <select
                id="quote-service"
                name="serviceType"
                className="mt-2 h-10 w-full rounded-sm border border-[#D6D9DC] bg-white px-3 py-2 text-sm text-[#4A4F55]"
              >
                {siteContent.services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label htmlFor="quote-location" className="text-sm font-medium text-[#4A4F55]">
              Ubicación del proyecto
              <Input
                id="quote-location"
                name="projectLocation"
                className="mt-2 h-10 rounded-sm border-[#D6D9DC]"
              />
            </label>
            <label htmlFor="quote-urgency" className="text-sm font-medium text-[#4A4F55]">
              Urgencia
              <select
                id="quote-urgency"
                name="urgency"
                className="mt-2 h-10 w-full rounded-sm border border-[#D6D9DC] bg-white px-3 py-2 text-sm text-[#4A4F55]"
              >
                <option>Por evaluar</option>
                <option>Esta semana</option>
                <option>Este mes</option>
                <option>Planificación futura</option>
              </select>
            </label>
            <div className="text-sm font-medium text-[#4A4F55]">
              <span id="quote-files-label">Adjuntar archivos</span>
              <div
                role="group"
                aria-labelledby="quote-files-label"
                className="mt-2 rounded-sm border border-dashed border-[#D6D9DC] bg-[#F4F5F7] px-3 py-6 text-center text-sm text-[#8C9197]"
              >
                Carga de archivos pendiente
              </div>
            </div>
            <label htmlFor="quote-description" className="text-sm font-medium text-[#4A4F55] sm:col-span-2">
              Descripción técnica del requerimiento
              <Textarea
                id="quote-description"
                name="description"
                className="mt-2 min-h-36 rounded-sm border-[#D6D9DC]"
              />
            </label>
          </div>
          <Button
            type="button"
            aria-disabled="true"
            className="mt-6 h-10 w-full rounded-sm bg-[#C81010] text-sm font-semibold text-white hover:bg-[#9A0D0D] sm:w-auto"
          >
            Envío pendiente de integración
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
