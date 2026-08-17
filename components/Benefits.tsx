"use client";

import { motion } from "framer-motion";
import { Leaf, PackageCheck, RotateCcw, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: PackageCheck,
    title: "Envío en 24-48h",
    description: "Despachamos desde nuestro centro logístico todos los días hábiles.",
  },
  {
    icon: RotateCcw,
    title: "Devoluciones en 30 días",
    description: "Si no es lo que esperabas, te lo cambiamos sin complicaciones.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía de 12 meses",
    description: "Cada pieza está respaldada contra defectos de fabricación.",
  },
  {
    icon: Leaf,
    title: "Materiales responsables",
    description: "Cuero de curtido vegetal, algodón orgánico y empaques reciclables.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-beige/40 py-20 md:py-24">
      <div className="container-casalia grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10">
              <benefit.icon className="h-5 w-5 text-forest" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-lg text-forest">{benefit.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-taupe">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
