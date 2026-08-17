# CASALIA — Encuentra tu estilo

Tienda online premium construida con **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS** y **Framer Motion**. Identidad visual minimalista inspirada en Apple, Zara Home, Muji y Aesop.

## Paleta de marca

| Nombre         | Hex       | Uso                              |
|----------------|-----------|-----------------------------------|
| Linen Cream    | `#EDE5D8` | Fondo principal                   |
| Warm Beige     | `#D8C8B4` | Tarjetas y fondos secundarios     |
| Mushroom Taupe | `#9B8D7A` | Texto secundario y bordes         |
| Olive Sage     | `#6E7C61` | Botones secundarios y etiquetas   |
| Forest Green   | `#2F4A3A` | Color principal, botones, header  |

## Estructura del proyecto

```
app/
  layout.tsx            → Fuentes (Fraunces + Inter), metadatos SEO globales, CartProvider
  page.tsx               → Página principal (Home)
  sitemap.ts / robots.ts → SEO técnico
  tienda/                → Listado con filtros por categoría y orden
  producto/[slug]/       → Ficha de producto
  checkout/               → Checkout: envío, pago, resumen editable y confirmación
  contacto/               → Formulario + WhatsApp
components/
  Header.tsx, Hero.tsx, Categories.tsx, ProductCard.tsx, ProductGrid.tsx,
  PromoBanner.tsx, Benefits.tsx, Testimonials.tsx, FAQ.tsx, Footer.tsx,
  ProductGallery.tsx, ProductPurchasePanel.tsx, ProductReviews.tsx,
  CartDrawer.tsx, WhatsAppButton.tsx
lib/
  products.ts             → Datos de productos, categorías, testimonios y FAQ
  cart-context.tsx         → Estado global del carrito (Context + useReducer), persistido en localStorage
types/index.ts             → Tipos compartidos
```

## Requisitos

- Node.js 18.18 o superior
- npm 9+

## Puesta en marcha local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Conectar con GitHub

```bash
git init
git add .
git commit -m "CASALIA: tienda online premium"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/casalia.git
git push -u origin main
```

## Desplegar en Vercel

1. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio `casalia` desde GitHub.
2. Vercel detecta automáticamente el framework Next.js — no se requiere configuración adicional.
3. Cada `git push` a `main` genera un despliegue de producción automático; cada rama o pull request genera un preview.

### Variables de entorno

Este proyecto no requiere variables de entorno para funcionar (los datos de productos son estáticos en `lib/products.ts`). Si en el futuro conectas un backend o pasarela de pago, agrega tus claves en **Project Settings → Environment Variables** en Vercel y en un archivo `.env.local` (ya excluido en `.gitignore`) para desarrollo local.

### Dominio propio

En Vercel, ve a **Project Settings → Domains** y agrega tu dominio (por ejemplo `casalia.com`). Actualiza también la constante `siteUrl` en `app/layout.tsx`, `app/sitemap.ts` y `app/robots.ts` para que coincida con el dominio final.

## Notas de contenido

- Los productos, precios y reseñas en `lib/products.ts` son datos de ejemplo listos para reemplazarse por un catálogo real o una integración con un CMS / backend de e-commerce.
- El número de WhatsApp de contacto se configura en `components/WhatsAppButton.tsx` (constante `PHONE`).
- Las imágenes se sirven desde Unsplash mediante `next/image`; para producción se recomienda reemplazarlas por fotografía propia del catálogo, alojada en un CDN o en `public/images`.

## Carrito y checkout

- El carrito (`lib/cart-context.tsx`) usa React Context + `useReducer` y persiste en `localStorage`, así que el contenido sobrevive a recargas y cierres del navegador (en el mismo dispositivo/navegador).
- El checkout (`/checkout`) simula el procesamiento del pedido y muestra una confirmación con número de pedido — **no está conectado a una pasarela de pago real**. Para producción necesitas integrar un proveedor (Stripe, Wompi, PayU, Mercado Pago, etc.) en el `handleSubmit` de `app/checkout/CheckoutClient.tsx`.
- El envío gratis aplica a partir de `FREE_SHIPPING_THRESHOLD` en ese mismo archivo; ajusta el umbral y el costo de envío según tu operación.
