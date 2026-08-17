"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="container-casalia py-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-xl2 bg-forest"
      >
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80"
          alt="Nueva colección de temporada CASALIA"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="relative z-10 flex flex-col items-start gap-6 px-8 py-16 md:px-16 md:py-24">
          <p className="text-[11px] uppercase tracking-widest2 text-linen/70">
            Edición de temporada
          </p>
          <h2 className="max-w-lg text-balance font-display text-3xl text-linen md:text-4xl lg:text-5xl">
            Hasta 30% en piezas seleccionadas de la colección Forest
          </h2>
          <Link
            href="/tienda"
            className="group flex items-center gap-2 rounded-full bg-linen px-8 py-3.5 text-sm uppercase tracking-widest2 text-forest transition-all duration-500 ease-silk hover:bg-white"
          >
            Ver ofertas
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
