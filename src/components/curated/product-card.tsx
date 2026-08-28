"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { HeartIcon } from "@/components/ui/icons";

export function ProductCard({ product }: { product: Product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <article className="flex flex-col w-full">
      {/* Product Packshot Canvas */}
      <div className="relative aspect-square w-full bg-neutral-200/70 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 mix-blend-multiply"
        />
      </div>

      {/* Meta Information */}
      <div className="flex flex-col pt-3 gap-1">
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span className="tracking-tight">[ {product.tag} ]</span>
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            aria-label={`Add ${product.name} to wishlist`}
            className="text-neutral-500 hover:text-black transition-colors cursor-pointer"
          >
            <HeartIcon
              filled={isFavorited}
              className={`w-3.5 h-3.5 ${
                isFavorited ? "text-black fill-current" : ""
              }`}
            />
          </button>
        </div>

        <h3 className="text-xs sm:text-sm font-medium text-black tracking-tight leading-snug">
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-700 font-normal">
          ${product.price}
        </p>
      </div>
    </article>
  );
}
