import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  title: string;
  eyebrow: string;
  description?: string;
  products: Product[];
  viewAllHref?: string;
}

export default function ProductGrid({
  title,
  eyebrow,
  description,
  products,
  viewAllHref,
}: ProductGridProps) {
  return (
    <section className="container-casalia py-20 md:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="font-display text-3xl text-forest md:text-4xl">{title}</h2>
          {description && (
            <p className="mt-3 max-w-md text-sm text-taupe">{description}</p>
          )}
        </div>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="group flex items-center gap-2 text-sm uppercase tracking-widest2 text-forest"
          >
            Ver todo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
