"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-forest text-linen">
      <div className="container-casalia py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="font-display text-2xl">CASALIA</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-linen/70">
              Piezas esenciales con carácter propio. Diseño calmado, materiales
              nobles y un estilo que no pasa de moda.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 transition-colors duration-300 hover:bg-linen/10"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 transition-colors duration-300 hover:bg-linen/10"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hola@casalia.com"
                aria-label="Correo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 transition-colors duration-300 hover:bg-linen/10"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-linen/50">Categorías</p>
            <ul className="flex flex-col gap-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/tienda?categoria=${c.slug}`}
                    className="text-sm text-linen/80 transition-colors hover:text-linen"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-linen/50">Empresa</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Sobre CASALIA", href: "/" },
                { label: "Tienda", href: "/tienda" },
                { label: "Contacto", href: "/contacto" },
                { label: "Envíos y devoluciones", href: "/#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-linen/80 transition-colors hover:text-linen"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-linen/50">Mantente al día</p>
            <p className="mb-4 text-sm text-linen/70">
              Suscríbete y recibe novedades y ofertas antes que nadie.
            </p>
            <form
              className="flex overflow-hidden rounded-full border border-linen/25"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Tu correo"
                className="w-full bg-transparent px-5 py-3 text-sm text-linen placeholder:text-linen/40 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-linen px-5 py-3 text-xs uppercase tracking-widest2 text-forest transition-colors duration-300 hover:bg-white"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-linen/15 pt-8 text-xs text-linen/50 md:flex-row">
          <p>© {new Date().getFullYear()} CASALIA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-linen">
              Términos
            </Link>
            <Link href="/" className="hover:text-linen">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
