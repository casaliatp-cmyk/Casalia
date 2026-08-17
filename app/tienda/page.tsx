import type { Metadata } from "next";
import { Suspense } from "react";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Explora toda la colección CASALIA: relojes, tecnología, gorras, bolsos y accesorios.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopClient />
    </Suspense>
  );
}
