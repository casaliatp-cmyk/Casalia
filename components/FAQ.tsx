"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqItems } from "@/lib/products";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-casalia py-20 md:py-28">
      <div className="mb-12 max-w-lg">
        <p className="eyebrow mb-3">Ayuda</p>
        <h2 className="font-display text-3xl text-forest md:text-4xl">
          Preguntas frecuentes
        </h2>
      </div>

      <div className="mx-auto max-w-2xl divide-y divide-taupe/20 border-y border-taupe/20">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg text-forest">{item.question}</span>
                <Plus
                  className={`h-5 w-5 flex-shrink-0 text-sage transition-transform duration-400 ease-silk ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-taupe">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
