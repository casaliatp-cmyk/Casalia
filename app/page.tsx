import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { getBestSellers, getFeatured } from "@/lib/products";

export default function Home() {
  const featured = getFeatured(8);
  const bestSellers = getBestSellers(4);

  return (
    <>
      <Hero />
      <Categories />
      <ProductGrid
        eyebrow="Selección CASALIA"
        title="Productos destacados"
        description="Una curaduría de las piezas que mejor representan nuestra visión de marca."
        products={featured}
        viewAllHref="/tienda"
      />
      <PromoBanner />
      <ProductGrid
        eyebrow="Los favoritos"
        title="Más vendidos"
        description="Lo que nuestra comunidad elige una y otra vez."
        products={bestSellers}
        viewAllHref="/tienda"
      />
      <Benefits />
      <Testimonials />
      <div id="faq">
        <FAQ />
      </div>
    </>
  );
}
