import { Category, FAQItem, Product, Testimonial } from "@/types";

export const categories: Category[] = [
  {
    slug: "relojes",
    name: "Relojes",
    emoji: "⌚",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
    description: "Piezas atemporales para medir lo que importa.",
  },
  {
    slug: "tecnologia",
    name: "Tecnología",
    emoji: "🎧",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description: "Diseño y función en perfecta armonía.",
  },
  {
    slug: "gorras",
    name: "Gorras",
    emoji: "🧢",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80",
    description: "El detalle final de un estilo cuidado.",
  },
  {
    slug: "bolsos",
    name: "Bolsos",
    emoji: "👜",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80",
    description: "Estructura y textura, hechos para durar.",
  },
  {
    slug: "accesorios",
    name: "Accesorios",
    emoji: "💍",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    description: "Pequeños gestos que definen un look.",
  },
  {
    slug: "novedades",
    name: "Novedades",
    emoji: "✨",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    description: "Lo último en llegar a nuestras estanterías.",
  },
];

const sampleReviews: Product["reviews"] = [
  {
    id: "r1",
    author: "Marcela T.",
    rating: 5,
    date: "12 jun. 2026",
    comment:
      "La calidad de los materiales sorprende. Se siente como una pieza pensada al detalle, no como un producto más.",
  },
  {
    id: "r2",
    author: "Andrés F.",
    rating: 5,
    date: "28 may. 2026",
    comment:
      "Empaque precioso, entrega puntual y el producto luce mejor en persona que en fotos.",
  },
  {
    id: "r3",
    author: "Camila R.",
    rating: 4,
    date: "3 may. 2026",
    comment: "Muy elegante. Le doy 4 estrellas solo porque tardó unos días extra en llegar.",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "reloj-artesanal-forest",
    name: "Reloj Artesanal Forest",
    category: "relojes",
    price: 489000,
    previousPrice: 620000,
    rating: 4.8,
    reviewCount: 132,
    badge: "Más vendido",
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Caja de acero cepillado y correa en cuero vegetal color musgo.",
    description:
      "Diseñado para acompañar cada día con serenidad. La caja en acero cepillado de 40mm y la correa en cuero vegetal color musgo se inspiran en la calma del bosque, con un movimiento japonés de precisión que no exige mantenimiento frecuente.",
    features: [
      "Caja en acero inoxidable cepillado de 40mm",
      "Correa en cuero vegetal color musgo",
      "Movimiento de cuarzo japonés de alta precisión",
      "Resistencia al agua 5 ATM",
      "Cristal de zafiro anti-rayones",
    ],
    reviews: sampleReviews,
  },
  {
    id: "p2",
    slug: "reloj-minimal-linen",
    name: "Reloj Minimal Linen",
    category: "relojes",
    price: 359000,
    rating: 4.6,
    reviewCount: 74,
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Esfera color lino con manecillas doradas satinadas.",
    description:
      "Un reloj de líneas puras para quienes prefieren el silencio del buen diseño. La esfera color lino y las manecillas doradas satinadas se combinan con una correa de malla milanesa ajustable.",
    features: [
      "Caja de 36mm, ideal para muñecas delicadas",
      "Correa de malla milanesa ajustable",
      "Esfera color lino con índices dorados",
      "Resistencia al agua 3 ATM",
    ],
    reviews: sampleReviews.slice(0, 2),
  },
  {
    id: "p3",
    slug: "audifonos-sage-wireless",
    name: "Audífonos Sage Wireless",
    category: "tecnologia",
    price: 279000,
    previousPrice: 349000,
    rating: 4.7,
    reviewCount: 210,
    badge: "Más vendido",
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Cancelación de ruido activa en acabado verde salvia mate.",
    description:
      "Sonido envolvente en un cuerpo minimalista. Terminado en verde salvia mate, con cancelación de ruido activa y hasta 30 horas de batería con el estuche de carga incluido.",
    features: [
      "Cancelación activa de ruido (ANC)",
      "Hasta 30 horas de batería con estuche",
      "Bluetooth 5.3 de baja latencia",
      "Controles táctiles personalizables",
      "Resistencia al sudor IPX4",
    ],
    reviews: sampleReviews,
  },
  {
    id: "p4",
    slug: "altavoz-portatil-terra",
    name: "Altavoz Portátil Terra",
    category: "tecnologia",
    price: 199000,
    rating: 4.5,
    reviewCount: 58,
    isNew: true,
    badge: "Nuevo",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Sonido cálido envuelto en tela y madera natural.",
    description:
      "Compacto, resistente y con un acabado en tela texturizada y base de madera natural. Perfecto para acompañar tardes tranquilas dentro o fuera de casa.",
    features: [
      "12 horas de reproducción continua",
      "Resistencia al agua IP67",
      "Conexión estéreo con un segundo altavoz",
      "Carga USB-C rápida",
    ],
    reviews: sampleReviews.slice(0, 1),
  },
  {
    id: "p5",
    slug: "gorra-vértice-premium",
    name: "Gorra Vertice Premium",
    category: "gorras",
    price: 59900,
    previousPrice: 49900,
    rating: 4.6,
    reviewCount: 96,
    images: [
      "gorras/Gorra01.png",],
    shortDescription: "Estilo urbano, ligero y versátil.",
    description:
      "Diseño moderno y versátil para complementar cualquier look. Su estructura ligera y ajuste cómodo la convierten en una opción ideal para el día a día, combinando estilo y practicidad.",
    features: [
      "100% de frescura",
      "Bordado tono a tono",
      "Cierre trasero ajustable",
      "Visera pre-curvada",
    ],
    reviews: sampleReviews.slice(0, 2),
  },
  {
    id: "p6",
    slug: "gorra-premium-negra",
    name: "Gorra Premium Negra",
    category: "gorras",
    price: 65000,
    rating: 4.4,
    reviewCount: 41,
    isNew: true,
    badge: "Nuevo",
    images: [
      "gorras/Gorra02.png",
    ],
    shortDescription: "Diseño negro, moderno y atemporal. Una gorra versátil que aporta carácter a cualquier outfit y es perfecta para acompañarte todos los días.",
    description:
      "Ligera, transpirable y fácil de combinar. La gorra premium negra es el complemento silencioso para looks de diario.",
    features: [
      "Estilo urbano",
      "Visera curva clásica",
      "Ajuste con hebilla trasera",
    ],
    reviews: [],
  },
  {
    id: "p7",
    slug: "bolso-estructurado-forest",
    name: "Bolso Estructurado Forest",
    category: "bolsos",
    price: 549000,
    previousPrice: 690000,
    rating: 4.9,
    reviewCount: 187,
    badge: "Más vendido",
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Cuero italiano verde bosque con herrajes en bronce cepillado.",
    description:
      "Estructura impecable en cuero italiano de curtido vegetal, en un profundo verde bosque. Los herrajes en bronce cepillado y el forro interior en lino le dan un carácter atemporal.",
    features: [
      "Cuero italiano de curtido vegetal",
      "Herrajes en bronce cepillado",
      "Forro interior en lino",
      "Compartimento para laptop de 14''",
      "Correa ajustable y desmontable",
    ],
    reviews: sampleReviews,
  },
  {
    id: "p8",
    slug: "bolso-tote-beige",
    name: "Bolso Tote Beige",
    category: "bolsos",
    price: 329000,
    rating: 4.5,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Lienzo grueso y asas en cuero para el día a día.",
    description:
      "Amplio, resistente y honesto en sus materiales: lienzo de algodón grueso con asas y base reforzada en cuero natural.",
    features: [
      "Lienzo de algodón 100% resistente",
      "Base reforzada en cuero natural",
      "Bolsillo interior con cierre",
      "Capacidad de 18 litros",
    ],
    reviews: sampleReviews.slice(0, 1),
  },
  {
    id: "p9",
    slug: "collar-hoja-bronce",
    name: "Collar Hoja Bronce",
    category: "accesorios",
    price: 129000,
    previousPrice: 159000,
    rating: 4.7,
    reviewCount: 88,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Colgante en forma de hoja bañado en bronce.",
    description:
      "Un guiño discreto a la naturaleza: colgante en forma de hoja bañado en bronce sobre cadena fina, pensado para usarse solo o en capas.",
    features: [
      "Bañado en bronce de 18k",
      "Cadena fina ajustable 40-45cm",
      "Hipoalergénico",
    ],
    reviews: sampleReviews.slice(0, 2),
  },
  {
    id: "p10",
    slug: "cinturon-cuero-natural",
    name: "Cinturón Cuero Natural",
    category: "accesorios",
    price: 149000,
    rating: 4.6,
    reviewCount: 52,
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Cuero curtido de forma natural con hebilla en bronce.",
    description:
      "Un básico de guardarropa que mejora con el tiempo. Cuero curtido de forma natural y hebilla en bronce macizo.",
    features: [
      "Cuero de curtido vegetal",
      "Hebilla en bronce macizo",
      "3.5cm de ancho",
    ],
    reviews: [],
  },
  {
    id: "p11",
    slug: "gafas-sol-terracota",
    name: "Gafas de Sol Terracota",
    category: "novedades",
    price: 219000,
    rating: 4.8,
    reviewCount: 34,
    isNew: true,
    badge: "Nuevo",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Montura acetato y lentes polarizados tono ámbar.",
    description:
      "Recién llegadas a CASALIA: montura en acetato italiano y lentes polarizados en tono ámbar que filtran el 100% de los rayos UV.",
    features: [
      "Acetato italiano",
      "Lentes polarizados anti-UV400",
      "Estuche rígido incluido",
    ],
    reviews: [],
  },
  {
    id: "p12",
    slug: "billetera-slim-forest",
    name: "Billetera Slim Forest",
    category: "novedades",
    price: 99000,
    rating: 4.5,
    reviewCount: 21,
    isNew: true,
    badge: "Nuevo",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1400&q=80",
    ],
    shortDescription: "Perfil delgado en cuero verde bosque con protección RFID.",
    description:
      "Diseñada para llevar solo lo esencial. Perfil ultra delgado, cuero verde bosque y protección RFID integrada.",
    features: [
      "Cuero de grano completo",
      "Protección RFID",
      "4 ranuras para tarjetas + bolsillo para billetes",
    ],
    reviews: [],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Laura Gómez",
    role: "Clienta desde 2024",
    quote:
      "Cada pedido de CASALIA se siente como un pequeño ritual: el empaque, la calidad, la atención al detalle. No he vuelto a comprar accesorios en otro lugar.",
    rating: 5,
  },
  {
    id: "t2",
    author: "Daniel Restrepo",
    role: "Diseñador gráfico",
    quote:
      "Encontré piezas que realmente combinan con mi forma de vestir. Se nota que hay una dirección de marca clara detrás de cada producto.",
    rating: 5,
  },
  {
    id: "t3",
    author: "Valentina Ruiz",
    role: "Clienta frecuente",
    quote:
      "El servicio al cliente por WhatsApp fue impecable y el bolso llegó incluso antes de lo esperado. Totalmente recomendado.",
    rating: 5,
  },
  {
    id: "t4",
    author: "Santiago Loaiza",
    role: "Clienta desde 2023",
    quote:
      "La calidad de los materiales justifica cada peso. Mi reloj Forest se ve mejor hoy que el día que lo compré.",
    rating: 4,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "¿Cuánto tarda el envío?",
    answer:
      "Los pedidos dentro de Colombia se entregan entre 2 y 5 días hábiles. Los envíos internacionales pueden tardar entre 6 y 12 días hábiles según el destino.",
  },
  {
    question: "¿Puedo cambiar o devolver mi pedido?",
    answer:
      "Sí. Tienes 30 días desde la entrega para solicitar un cambio o devolución, siempre que el producto conserve su empaque y etiquetas originales.",
  },
  {
    question: "¿Los productos tienen garantía?",
    answer:
      "Todos nuestros productos cuentan con 12 meses de garantía contra defectos de fabricación. Escríbenos por WhatsApp si necesitas hacerla efectiva.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito y débito, PSE, Nequi y pagos contra entrega en ciudades principales de Colombia.",
  },
  {
    question: "¿Hacen envíos internacionales?",
    answer:
      "Sí, enviamos a toda Latinoamérica, Estados Unidos y España. El costo se calcula automáticamente según tu dirección al finalizar la compra.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getBestSellers(limit = 8): Product[] {
  return products.filter((p) => p.bestSeller).slice(0, limit);
}

export function getFeatured(limit = 8): Product[] {
  return products.slice(0, limit);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
