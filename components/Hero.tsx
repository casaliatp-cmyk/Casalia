"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-forest">
      <Image
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2400&q=80"
        alt="Composición editorial de accesorios CASALIA sobre lino natural"
        fill
        priority
        className="object-cover opacity-[0.85]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-forest/10" />

      {/* Signature leaf mark, drawn on load */}
      <svg
        className="pointer-events-none absolute right-6 top-24 hidden h-40 w-40 opacity-70 md:right-14 md:top-28 md:block"
        viewBox="0 0 120 120"
        fill="none"
      >
        <motion.path
          d="M60 10 C90 20 105 55 95 90 C70 100 30 95 20 65 C12 42 30 15 60 10Z"
          stroke="#EDE5D8"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
        <motion.path
          d="M60 10 C58 45 55 75 40 100"
          stroke="#EDE5D8"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        />
      </svg>

      <div className="container-casalia relative z-10 pb-20 pt-40 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 text-[11px] uppercase tracking-widest2 text-linen/70"
        >
          Colección permanente
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-3xl text-balance font-display text-5xl leading-[1.05] text-linen sm:text-6xl md:text-7xl"
        >
          Encuentra tu estilo.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-6 max-w-md text-balance text-base text-linen/80 md:text-lg"
        >
          Piezas esenciales, hechas con materiales nobles y una mirada calmada
          sobre el diseño. Esto es CASALIA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/tienda" className="btn-primary bg-linen text-forest hover:bg-white">
            Comprar ahora
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <a
            href="#categorias"
            className="btn-outline border-linen/40 text-linen hover:border-linen hover:bg-linen/10"
          >
            Explorar categorías
          </a>
        </motion.div>
      </div>
    </section>
  );
}
