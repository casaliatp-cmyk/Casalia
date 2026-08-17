"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [zoomStyle, setZoomStyle] = useState<{ x: number; y: number } | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setZoomStyle({ x, y });
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative aspect-square w-full overflow-hidden rounded-xl2 bg-beige/40"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setZoomStyle(null)}
      >
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={images[active]}
            alt={`${name} — imagen ${active + 1}`}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-300 ease-out"
            style={
              zoomStyle
                ? {
                    transform: "scale(1.8)",
                    transformOrigin: `${zoomStyle.x}% ${zoomStyle.y}%`,
                  }
                : undefined
            }
          />
        </motion.div>
        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-forest/80 px-3 py-1 text-[10px] uppercase tracking-widest2 text-linen">
          Pasa el cursor para hacer zoom
        </span>
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={`relative h-20 w-20 overflow-hidden rounded-xl border transition-all duration-300 ${
                active === i
                  ? "border-forest shadow-softer"
                  : "border-taupe/20 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
