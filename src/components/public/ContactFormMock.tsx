import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormMock() {
  return (
    <Card className="rounded-sm border-[#D6D9DC] bg-white py-0 shadow-none">
      <CardHeader className="rounded-t-sm border-b border-[#D6D9DC] bg-[#F4F5F7] py-4">
        <Badge className="w-fit rounded-sm bg-[#C81010] text-white hover:bg-[#9A0D0D]">
          Canal de contacto DSL
        </Badge>
        <CardTitle className="text-xl font-semibold text-[#4A4F55]">
          Canal comercial técnico
        </CardTitle>
      </CardHeader>
      <CardContent className="py-4">
        <form>
          <div
            id="contact-form-status"
            className="rounded-sm border border-[#E54848] bg-[#F4F5F7] px-4 py-3 text-sm leading-6 text-[#4A4F55]"
          >
            Formulario visual pendiente de integración con el sistema.
          </div>
          <div className="mt-6 grid gap-5">
            <label htmlFor="contact-name" className="text-sm font-medium text-[#4A4F55]">
              Nombre
              <Input
                id="contact-name"
                name="name"
                className="mt-2 h-10 rounded-sm border-[#D6D9DC]"
                aria-describedby="contact-form-status"
              />
            </label>
            <label htmlFor="contact-email" className="text-sm font-medium text-[#4A4F55]">
              Correo electrónico
              <Input
                id="contact-email"
                name="email"
                type="email"
                className="mt-2 h-10 rounded-sm border-[#D6D9DC]"
              />
            </label>
            <label htmlFor="contact-phone" className="text-sm font-medium text-[#4A4F55]">
              Teléfono
              <Input
                id="contact-phone"
                name="phone"
                className="mt-2 h-10 rounded-sm border-[#D6D9DC]"
              />
            </label>
            <label htmlFor="contact-channel" className="text-sm font-medium text-[#4A4F55]">
              Canal preferido
              <select
                id="contact-channel"
                name="preferredChannel"
                className="mt-2 h-10 w-full rounded-sm border border-[#D6D9DC] bg-white px-3 py-2 text-sm text-[#4A4F55]"
              >
                <option>Correo electrónico</option>
                <option>Teléfono</option>
                <option>WhatsApp futuro</option>
              </select>
            </label>
            <label htmlFor="contact-message" className="text-sm font-medium text-[#4A4F55]">
              Mensaje
              <Textarea
                id="contact-message"
                name="message"
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
