"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/products";

export default function Categories() {
  return (
    <section id="categorias" className="container-casalia py-20 md:py-28">
      <div className="mb-12 max-w-lg">
        <p className="eyebrow mb-3">Explora</p>
        <h2 className="font-display text-3xl text-forest md:text-4xl">
          Seis maneras de encontrar tu estilo
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {categories.map((category, i) => (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
          >
            <Link
              href={`/tienda?categoria=${category.slug}`}
              className="group relative block aspect-square overflow-hidden rounded-card shadow-softer"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-silk group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent transition-opacity duration-500 group-hover:from-forest/90" />

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                <span className="mb-1 block text-2xl">{category.emoji}</span>
                <h3 className="font-display text-lg text-linen md:text-xl">
                  {category.name}
                </h3>
                <p className="mt-1 hidden text-xs text-linen/70 md:block">
                  {category.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
