"use client";

import { useState } from "react";
import { CommunityGridItem, communityItems } from "@/types/community-pieces";
import { CommunityHeader } from "./community-header";
import { PieceCard } from "./piece-card";
import { InterstitialCard } from "./interstitial-card";
import { EditorialCard } from "./editorial-card";
import { SilhouetteDrawer } from "./silhouette-drawer";

type ProductItem = Extract<CommunityGridItem, { type: "product" }>;

export function CommunitySection() {
  const [selectedPiece, setSelectedPiece] = useState<ProductItem | null>(null);

  return (
    <section
      id="shop"
      className="w-full bg-[#fbfbfb] px-6 sm:px-10 lg:px-12 py-16 sm:py-24"
    >
      <div className="w-full flex flex-col gap-12 sm:gap-16">
        <CommunityHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {communityItems.map((item) => {
            if (item.type === "product") {
              return (
                <PieceCard
                  key={item.id}
                  name={item.name}
                  tag={item.tag}
                  price={item.price}
                  image={item.image}
                  onClick={() => setSelectedPiece(item)}
                />
              );
            }
            if (item.type === "interstitial") {
              return <InterstitialCard key={item.id} tag={item.tag} />;
            }
            return (
              <EditorialCard
                key={item.id}
                image={item.image}
                alt={item.alt}
              />
            );
          })}
        </div>
      </div>

      <SilhouetteDrawer
        item={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onSelectPiece={setSelectedPiece}
      />
    </section>
  );
}
