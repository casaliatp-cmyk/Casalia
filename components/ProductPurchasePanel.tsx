"use client";

import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductPurchasePanel({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, openDrawer } = useCart();
  const discount = product.previousPrice
    ? Math.round(100 - (product.price / product.previousPrice) * 100)
    : null;

  function handleAddToCart() {
    addItem(
      {
        id: product.id,
        slug: product.slug,
        name: product.name,
        image: product.images[0],
        price: product.price,
      },
      quantity
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <div className="flex flex-col gap-6">
      {product.badge && (
        <span className="w-fit rounded-full bg-forest px-3 py-1 text-[10px] uppercase tracking-widest2 text-linen">
          {product.badge}
        </span>
      )}

      <h1 className="font-display text-3xl text-forest md:text-4xl">{product.name}</h1>

      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(product.rating)
                  ? "fill-sage text-sage"
                  : "fill-taupe/20 text-taupe/20"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-taupe">
          {product.rating.toFixed(1)} · {product.reviewCount} opiniones
        </span>
      </div>

      <p className="text-base leading-relaxed text-forest/80">
        {product.shortDescription}
      </p>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-medium text-forest">
          {formatPrice(product.price)}
        </span>
        {product.previousPrice && (
          <>
            <span className="text-base text-taupe line-through">
              {formatPrice(product.previousPrice)}
            </span>
            <span className="rounded-full bg-sage/15 px-2.5 py-1 text-xs text-sage">
              -{discount}%
            </span>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-taupe/25">
          <button
            aria-label="Reducir cantidad"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-11 w-11 items-center justify-center text-forest transition-colors hover:bg-forest/5"
          >
            <Minus className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <span className="w-8 text-center text-sm text-forest">{quantity}</span>
          <button
            aria-label="Aumentar cantidad"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-11 w-11 items-center justify-center text-forest transition-colors hover:bg-forest/5"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <button
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          onClick={() => setIsFavorite((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-taupe/25 transition-colors hover:bg-forest/5"
        >
          <Heart
            className={`h-4 w-4 ${isFavorite ? "fill-forest text-forest" : "text-forest"}`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button onClick={handleAddToCart} className="btn-primary flex-1">
          <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
          {justAdded ? "Añadido ✓" : "Añadir al carrito"}
        </button>
        <button
          onClick={() => {
            handleAddToCart();
            openDrawer();
          }}
          className="btn-outline flex-1"
        >
          Comprar ahora
        </button>
      </div>
      <WhatsAppButton
        full
        message={`Hola, quiero más información sobre ${product.name}.`}
      />
    </div>
  );
}
