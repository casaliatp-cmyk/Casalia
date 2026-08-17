import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  full?: boolean;
}

const PHONE = "573000000000";

export default function WhatsAppButton({
  message = "Hola, tengo una pregunta sobre un producto de CASALIA.",
  className = "",
  full = false,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-sage/40 bg-sage/10 px-8 py-3.5 text-sm tracking-wide text-forest transition-all duration-500 ease-silk hover:border-sage hover:bg-sage/20 active:scale-[0.98] ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
      Preguntar por WhatsApp
    </a>
  );
}
