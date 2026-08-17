export type CategorySlug =
  | "relojes"
  | "tecnologia"
  | "gorras"
  | "bolsos"
  | "accesorios"
  | "novedades";

export interface Category {
  slug: CategorySlug;
  name: string;
  emoji: string;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  previousPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: "Nuevo" | "Más vendido" | "Edición limitada";
  images: string[];
  shortDescription: string;
  description: string;
  features: string[];
  reviews: Review[];
  bestSeller?: boolean;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
}

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

