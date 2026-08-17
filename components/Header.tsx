"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { categories } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Tienda", href: "/tienda" },
  ...categories.map((c) => ({ label: c.name, href: `/tienda?categoria=${c.slug}` })),
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-silk ${
        scrolled
          ? "bg-linen/90 backdrop-blur-md shadow-softer"
          : "bg-linen/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-casalia flex h-20 items-center justify-between gap-4">
        <button
          className="flex items-center gap-2 lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-6 w-6 text-forest" strokeWidth={1.5} />
        </button>

        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl md:text-3xl tracking-tight text-forest">
            CASALIA
          </span>
          <span className="hidden md:inline-block h-1.5 w-1.5 rounded-full bg-sage transition-transform duration-500 group-hover:scale-150" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-widest2 text-forest/80 transition-colors duration-300 hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <button
            aria-label="Buscar"
            onClick={() => setSearchOpen((v) => !v)}
            className="rounded-full p-2.5 text-forest transition-colors duration-300 hover:bg-forest/5"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            aria-label="Favoritos"
            className="rounded-full p-2.5 text-forest transition-colors duration-300 hover:bg-forest/5"
          >
            <Heart className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            aria-label="Carrito"
            onClick={openDrawer}
            className="relative rounded-full p-2.5 text-forest transition-colors duration-300 hover:bg-forest/5"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-forest text-[10px] text-linen">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-taupe/15 bg-linen"
          >
            <div className="container-casalia py-5">
              <div className="flex items-center gap-3 rounded-full border border-taupe/25 bg-white/40 px-5 py-3">
                <Search className="h-4 w-4 text-taupe" strokeWidth={1.5} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Busca relojes, bolsos, accesorios..."
                  className="w-full bg-transparent text-sm text-forest placeholder:text-taupe/70 focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-forest/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full w-[82%] max-w-sm flex-col bg-linen p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-2xl text-forest">CASALIA</span>
                <button aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>
                  <X className="h-6 w-6 text-forest" strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl text-forest/90 transition-colors hover:text-sage"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
