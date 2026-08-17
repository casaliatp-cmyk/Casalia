import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import ProductGallery from "@/components/ProductGallery";
import ProductPurchasePanel from "@/components/ProductPurchasePanel";
import ProductReviews from "@/components/ProductReviews";
import ProductGrid from "@/components/ProductGrid";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | CASALIA`,
      description: product.shortDescription,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div>
      <div className="container-casalia py-10 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <ProductPurchasePanel product={product} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl text-forest">Descripción</h2>
            <p className="mt-4 text-sm leading-relaxed text-forest/80">
              {product.description}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-forest">Características</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-forest/80">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" strokeWidth={1.5} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-display text-2xl text-forest">Opiniones de clientes</h2>
          <div className="mt-6">
            <ProductReviews product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <ProductGrid
          eyebrow="También te puede gustar"
          title="Productos relacionados"
          products={related}
        />
      )}
    </div>
  );
}
