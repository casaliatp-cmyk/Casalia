import { Star } from "lucide-react";
import { Product } from "@/types";

export default function ProductReviews({ product }: { product: Product }) {
  if (product.reviews.length === 0) {
    return (
      <div className="rounded-card border border-taupe/15 bg-beige/30 p-8 text-center">
        <p className="text-sm text-taupe">
          Este producto aún no tiene opiniones. Sé la primera persona en compartir tu
          experiencia.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col divide-y divide-taupe/15">
      {product.reviews.map((review) => (
        <div key={review.id} className="py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-forest">{review.author}</p>
            <span className="text-xs text-taupe">{review.date}</span>
          </div>
          <div className="mt-2 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < review.rating ? "fill-sage text-sage" : "fill-taupe/20 text-taupe/20"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-forest/80">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
