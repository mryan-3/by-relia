"use client";

import { useState } from "react";
import { curatedProducts } from "@/types/product";
import { CuratedNav } from "./curated-nav";
import { CuratedQuote } from "./curated-quote";
import { ProductCard } from "./product-card";

export function CuratedSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? curatedProducts
      : curatedProducts.filter((p) => p.category === activeTab);

  return (
    <section
      id="collections"
      className="w-full bg-[#fbfbfb] px-6 sm:px-10 lg:px-12 py-16 sm:py-24"
    >
      <div className="w-full flex flex-col gap-12 sm:gap-16">
        {/* Header: Categories Left / Philosophy Quote Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8">
          <div className="lg:col-span-4">
            <CuratedNav activeTab={activeTab} onSelectTab={setActiveTab} />
          </div>
          <div className="lg:col-span-8">
            <CuratedQuote />
          </div>
        </div>

        {/* Expansive 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

