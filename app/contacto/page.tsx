import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos, estamos aquí para ayudarte a encontrar tu estilo.",
};

export default function ContactPage() {
  return (
    <div className="container-casalia py-14 md:py-20">
      <div className="max-w-lg">
        <p className="eyebrow mb-3">Hablemos</p>
        <h1 className="font-display text-4xl text-forest">Contacto</h1>
        <p className="mt-4 text-sm leading-relaxed text-taupe">
          ¿Tienes preguntas sobre un pedido, un producto o una alianza? Escríbenos y
          te responderemos en menos de 24 horas.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest/10">
              <Mail className="h-4 w-4 text-forest" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-forest">Correo</p>
              <p className="text-sm text-taupe">hola@casalia.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest/10">
              <Phone className="h-4 w-4 text-forest" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-forest">Teléfono</p>
              <p className="text-sm text-taupe">+57 300 000 0000</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest/10">
              <MapPin className="h-4 w-4 text-forest" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-forest">Showroom</p>
              <p className="text-sm text-taupe">Bogotá, Colombia</p>
            </div>
          </div>

          <div className="mt-4">
            <WhatsAppButton />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
