"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import WhatsAppButton from "@/components/WhatsAppButton";

const FREE_SHIPPING_THRESHOLD = 300000;
const SHIPPING_COST = 15000;

type Step = "form" | "processing" | "confirmed";
type PaymentMethod = "tarjeta" | "pse" | "contraentrega";

interface OrderSnapshot {
  orderNumber: string;
  itemCount: number;
  total: number;
  email: string;
}

export default function CheckoutClient() {
  const { items, subtotal, totalItems, updateQuantity, removeItem, clearCart } = useCart();
  const [step, setStep] = useState<Step>("form");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("tarjeta");
  const [order, setOrder] = useState<OrderSnapshot | null>(null);

  const shipping = items.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (items.length === 0) return;

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");

    setStep("processing");

    // Simula el procesamiento del pedido (aquí se integraría una pasarela real)
    setTimeout(() => {
      setOrder({
        orderNumber: `CAM-${Math.floor(100000 + Math.random() * 900000)}`,
        itemCount: totalItems,
        total,
        email,
      });
      clearCart();
      setStep("confirmed");
    }, 1400);
  }

  if (step === "confirmed" && order) {
    return (
      <div className="container-casalia flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-md flex-col items-center"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage/15">
            <CheckCircle2 className="h-8 w-8 text-sage" strokeWidth={1.5} />
          </div>
          <p className="eyebrow mb-3">Pedido confirmado</p>
          <h1 className="font-display text-3xl text-forest md:text-4xl">
            Gracias por tu compra
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-taupe">
            Tu número de pedido es{" "}
            <span className="font-medium text-forest">{order.orderNumber}</span>. Enviamos
            la confirmación a <span className="text-forest">{order.email || "tu correo"}</span>{" "}
            junto con el detalle de {order.itemCount} artículo
            {order.itemCount !== 1 ? "s" : ""} por un total de{" "}
            <span className="font-medium text-forest">{formatPrice(order.total)}</span>.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/tienda" className="btn-primary">
              Seguir comprando
            </Link>
            <WhatsAppButton message="Hola, tengo una pregunta sobre mi pedido en CASALIA." />
          </div>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-casalia flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="mb-4 h-10 w-10 text-taupe/50" strokeWidth={1.2} />
        <p className="mb-6 text-sm text-taupe">Tu carrito está vacío por ahora.</p>
        <Link href="/tienda" className="btn-primary">
          Explorar tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container-casalia py-14 md:py-20">
      <div className="mb-10 max-w-lg">
        <p className="eyebrow mb-3">Último paso</p>
        <h1 className="font-display text-4xl text-forest">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <fieldset className="flex flex-col gap-5">
            <legend className="mb-1 font-display text-xl text-forest">
              Información de envío
            </legend>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id="firstName" name="firstName" label="Nombre" required />
              <Field id="lastName" name="lastName" label="Apellido" required />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id="email" name="email" label="Correo" type="email" required />
              <Field id="phone" name="phone" label="Teléfono" type="tel" required />
            </div>
            <Field id="address" name="address" label="Dirección" required />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Field id="city" name="city" label="Ciudad" required />
              <Field id="country" name="country" label="País" required />
              <Field id="zip" name="zip" label="Código postal" />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <legend className="mb-1 font-display text-xl text-forest">Método de pago</legend>
            {(
              [
                { id: "tarjeta", label: "Tarjeta de crédito o débito" },
                { id: "pse", label: "PSE" },
                { id: "contraentrega", label: "Pago contra entrega" },
              ] as { id: PaymentMethod; label: string }[]
            ).map((option) => (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-5 py-4 text-sm transition-colors duration-300 ${
                  paymentMethod === option.id
                    ? "border-forest bg-forest/5 text-forest"
                    : "border-taupe/25 text-forest/80 hover:border-forest/50"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.id}
                  checked={paymentMethod === option.id}
                  onChange={() => setPaymentMethod(option.id)}
                  className="h-4 w-4 accent-forest"
                />
                {option.label}
              </label>
            ))}
            {paymentMethod === "tarjeta" && (
              <div className="grid grid-cols-1 gap-5 rounded-xl border border-taupe/15 bg-beige/20 p-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field id="cardNumber" name="cardNumber" label="Número de tarjeta" required />
                </div>
                <Field id="cardExpiry" name="cardExpiry" label="MM/AA" required />
                <Field id="cardCvc" name="cardCvc" label="CVC" required />
              </div>
            )}
          </fieldset>

          <button type="submit" disabled={step === "processing"} className="btn-primary self-start">
            {step === "processing" ? "Procesando..." : `Confirmar pedido · ${formatPrice(total)}`}
          </button>
        </form>

        <aside className="card-surface h-fit p-7">
          <h2 className="mb-6 font-display text-xl text-forest">Resumen del pedido</h2>
          <ul className="flex flex-col divide-y divide-taupe/15">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 py-4">
                <div className="relative h-16 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-beige/50">
                  <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm text-forest">{item.name}</p>
                    <button
                      aria-label={`Quitar ${item.name}`}
                      onClick={() => removeItem(item.id)}
                      className="flex-shrink-0 text-taupe transition-colors hover:text-forest"
                    >
                      <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-taupe/25">
                      <button
                        type="button"
                        aria-label="Reducir cantidad"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center text-forest transition-colors hover:bg-forest/5"
                      >
                        <Minus className="h-3 w-3" strokeWidth={1.5} />
                      </button>
                      <span className="w-5 text-center text-xs text-forest">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Aumentar cantidad"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center text-forest transition-colors hover:bg-forest/5"
                      >
                        <Plus className="h-3 w-3" strokeWidth={1.5} />
                      </button>
                    </div>
                    <span className="text-sm font-medium text-forest">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-2 border-t border-taupe/15 pt-6 text-sm">
            <div className="flex items-center justify-between text-taupe">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-taupe">
              <span>Envío</span>
              <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-sage">
                Envío gratis en compras desde {formatPrice(FREE_SHIPPING_THRESHOLD)}.
              </p>
            )}
            <div className="mt-2 flex items-center justify-between border-t border-taupe/15 pt-4 text-base font-medium text-forest">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs uppercase tracking-widest2 text-taupe">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-taupe/25 bg-transparent px-4 py-3 text-sm text-forest focus:outline-none"
      />
    </div>
  );
}
