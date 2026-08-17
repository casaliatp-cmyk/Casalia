"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { categories, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { CategorySlug } from "@/types";

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") as CategorySlug | null;
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "todos">(
    initialCategory ?? "todos"
  );
  const [sort, setSort] = useState<"relevancia" | "precio-asc" | "precio-desc">(
    "relevancia"
  );

  const filtered = useMemo(() => {
    let list =
      activeCategory === "todos"
        ? products
        : products.filter((p) => p.category === activeCategory);

    if (sort === "precio-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "precio-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, sort]);

  return (
    <div className="container-casalia py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 max-w-lg"
      >
        <p className="eyebrow mb-3">Colección completa</p>
        <h1 className="font-display text-4xl text-forest">Tienda</h1>
      </motion.div>

      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("todos")}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest2 transition-all duration-300 ${
              activeCategory === "todos"
                ? "border-forest bg-forest text-linen"
                : "border-taupe/25 text-forest hover:border-forest"
            }`}
          >
            Todos
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCategory(c.slug)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest2 transition-all duration-300 ${
                activeCategory === c.slug
                  ? "border-forest bg-forest text-linen"
                  : "border-taupe/25 text-forest hover:border-forest"
              }`}
            >
              {c.emoji} {c.name}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="w-fit rounded-full border border-taupe/25 bg-transparent px-5 py-2 text-xs uppercase tracking-widest2 text-forest focus:outline-none"
        >
          <option value="relevancia">Relevancia</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-sm text-taupe">
          No encontramos productos en esta categoría todavía.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
