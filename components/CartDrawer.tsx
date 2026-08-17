"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const {
    items,
    subtotal,
    totalItems,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
  } = useCart();
  function handleWhatsAppOrder() {
    const phone = "573233635993";

    const productLines = items
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} — ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const message = `Hola, quiero realizar este pedido en CASALIA:

${productLines}

Total: ${formatPrice(subtotal)}

Quedo atenta para confirmar disponibilidad y envío.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }
  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-forest/40 backdrop-blur-sm"
          onClick={closeDrawer}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto flex h-full w-full max-w-md flex-col bg-linen"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-taupe/15 px-6 py-6">
              <h2 className="font-display text-xl text-forest">
                Tu carrito {totalItems > 0 && `(${totalItems})`}
              </h2>
              <button aria-label="Cerrar carrito" onClick={closeDrawer}>
                <X className="h-5 w-5 text-forest" strokeWidth={1.5} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-taupe/50" strokeWidth={1.2} />
                <p className="text-sm text-taupe">Tu carrito está vacío por ahora.</p>
                <Link href="/tienda" onClick={closeDrawer} className="btn-primary">
                  Explorar tienda
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="flex flex-col divide-y divide-taupe/15">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-4 py-5">
                        <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-beige/50">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between gap-3">
                            <Link
                              href={`/producto/${item.slug}`}
                              onClick={closeDrawer}
                              className="font-display text-[15px] leading-tight text-forest hover:text-sage"
                            >
                              {item.name}
                            </Link>
                            <button
                              aria-label={`Quitar ${item.name}`}
                              onClick={() => removeItem(item.id)}
                              className="flex-shrink-0 text-taupe transition-colors hover:text-forest"
                            >
                              <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center rounded-full border border-taupe/25">
                              <button
                                aria-label="Reducir cantidad"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="flex h-8 w-8 items-center justify-center text-forest transition-colors hover:bg-forest/5"
                              >
                                <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                              </button>
                              <span className="w-6 text-center text-xs text-forest">
                                {item.quantity}
                              </span>
                              <button
                                aria-label="Aumentar cantidad"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="flex h-8 w-8 items-center justify-center text-forest transition-colors hover:bg-forest/5"
                              >
                                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
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
                </div>

                <div className="border-t border-taupe/15 px-6 py-6">
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="text-taupe">Subtotal</span>
                    <span className="font-medium text-forest">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="mb-5 text-xs text-taupe">
                    Envío e impuestos se calculan en el checkout.
                  </p>
                  <button
  onClick={() => {
    handleWhatsAppOrder();
    closeDrawer();
  }}
  className="btn-primary flex w-full items-center justify-center gap-2"
>
  <MessageCircle className="h-4 w-4" />
  Pedir por WhatsApp
</button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
