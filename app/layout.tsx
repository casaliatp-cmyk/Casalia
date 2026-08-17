import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://casalia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tienda Casalia — Encuentra tu estilo",
    template: "%s | Casalia",
  },
  description:
    "Casalia es una tienda premium de relojes, tecnología, gorras, bolsos y accesorios. Diseño minimalista, materiales nobles y envíos a toda Latinoamérica.",
  keywords: [
    "Casalia",
    "Tienda Casalia",
    "tienda premium",
    "relojes",
    "bolsos",
    "accesorios",
    "gorras",
    "tecnología",
    "moda minimalista",
  ],
  openGraph: {
    title: "Tienda Casalia — Encuentra tu estilo",
    description:
      "Piezas esenciales con carácter propio. Diseño calmado, materiales nobles y un estilo que no pasa de moda.",
    url: siteUrl,
    siteName: "Casalia",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda Casalia — Encuentra tu estilo",
    description:
      "Piezas esenciales con carácter propio. Diseño calmado, materiales nobles y un estilo que no pasa de moda.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
