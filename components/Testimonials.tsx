"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-casalia mb-12 max-w-lg">
        <p className="eyebrow mb-3">Comunidad CASALIA</p>
        <h2 className="font-display text-3xl text-forest md:text-4xl">
          Historias de quienes ya encontraron su estilo
        </h2>
      </div>

      <div className="rail container-casalia flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {testimonials.map((testimonial, i) => (
          <motion.figure
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            className="card-surface flex min-w-[280px] max-w-[340px] snap-start flex-col gap-5 p-7 md:min-w-[320px]"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`h-3.5 w-3.5 ${
                    idx < testimonial.rating
                      ? "fill-sage text-sage"
                      : "fill-taupe/20 text-taupe/20"
                  }`}
                />
              ))}
            </div>
            <blockquote className="text-[15px] leading-relaxed text-forest/90">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto">
              <p className="text-sm font-medium text-forest">{testimonial.author}</p>
              <p className="text-xs text-taupe">{testimonial.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
