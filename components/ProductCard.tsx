"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem, openDrawer } = useCart();
  const discount = product.previousPrice
    ? Math.round(100 - (product.price / product.previousPrice) * 100)
    : null;

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: product.images[0],
      price: product.price,
    });
    openDrawer();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.06 }}
      className="group relative flex flex-col"
    >
      <Link
        href={`/producto/${product.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-card bg-beige/50"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-silk group-hover:scale-[1.06]"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover opacity-0 transition-opacity duration-700 ease-silk group-hover:opacity-100"
          />
        )}

        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.badge && (
            <span className="rounded-full bg-forest px-3 py-1 text-[10px] uppercase tracking-widest2 text-linen">
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="rounded-full bg-sage px-3 py-1 text-[10px] uppercase tracking-widest2 text-linen">
              -{discount}%
            </span>
          )}
        </div>

        <button
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite((v) => !v);
          }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-linen/90 opacity-0 shadow-softer transition-all duration-400 ease-silk group-hover:opacity-100"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isFavorite ? "fill-forest text-forest" : "text-forest"
            }`}
            strokeWidth={1.5}
          />
        </button>

        <button
          onClick={handleAddToCart}
          className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-forest/95 py-3 text-xs uppercase tracking-widest2 text-linen opacity-0 shadow-lift transition-all duration-400 ease-silk group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
          Comprar
        </button>
      </Link>

      <div className="mt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.round(product.rating)
                  ? "fill-sage text-sage"
                  : "fill-taupe/20 text-taupe/20"
              }`}
            />
          ))}
          <span className="ml-1 text-[11px] text-taupe">({product.reviewCount})</span>
        </div>

        <Link href={`/producto/${product.slug}`}>
          <h3 className="font-display text-lg text-forest transition-colors duration-300 group-hover:text-sage">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[15px] font-medium text-forest">
            {formatPrice(product.price)}
          </span>
          {product.previousPrice && (
            <span className="text-[13px] text-taupe line-through">
              {formatPrice(product.previousPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
