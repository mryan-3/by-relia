"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "@/components/ui/icons";

interface PieceCardProps {
  name: string;
  tag: string;
  price: number;
  image: string;
  onClick: () => void;
}

export function PieceCard({
  name,
  tag,
  price,
  image,
  onClick,
}: PieceCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <article
      onClick={onClick}
      className="flex flex-col w-full cursor-pointer group"
    >
      <div className="relative aspect-square w-full bg-neutral-200/70 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 mix-blend-multiply"
        />
        <span className="absolute bottom-3 right-3 text-[10px] uppercase font-medium tracking-wider bg-white/90 backdrop-blur-xs text-black px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
          View Look
        </span>
      </div>

      <div className="flex flex-col pt-3 gap-1 h-14">
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span className="tracking-tight">[ {tag} ]</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            aria-label={`Add ${name} to wishlist`}
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

        <h3 className="text-xs sm:text-sm font-medium text-black tracking-tight leading-snug truncate">
          {name}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-700 font-normal">
          ${price}
        </p>
      </div>
    </article>
  );
}
