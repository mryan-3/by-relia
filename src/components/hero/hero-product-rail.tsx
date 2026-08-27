"use client";

import Image from "next/image";

const heroProducts = [
  { id: "hp-1", title: "Heavyweight Boxy Hoodie", src: "/images/prod-hoodie.jpg" },
  { id: "hp-2", title: "Sculpted Leather Blouson", src: "/images/prod-leather-jacket.jpg" },
  { id: "hp-3", title: "Tailored Wool Overcoat", src: "/images/prod-wool-overcoat.jpg" },
];

export function HeroProductRail() {
  return (
    <aside
      aria-label="Featured Hero Pieces"
      className="absolute top-24 right-4 sm:right-8 z-20 flex flex-col gap-2.5 pointer-events-auto"
    >
      {heroProducts.map((item) => (
        <a
          key={item.id}
          href="#collections"
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#ececec]/90 backdrop-blur-md overflow-hidden opacity-95 hover:opacity-100 transition-opacity"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="64px"
            className="object-contain p-1 mix-blend-multiply"
          />
        </a>
      ))}
    </aside>
  );
}
