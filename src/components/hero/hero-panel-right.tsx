import Image from "next/image";
import { HeroProductRail } from "./hero-product-rail";

export function HeroPanelRight() {
  return (
    <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
      <Image
        src="/images/hero-right.jpg"
        alt="By.Relia model in architectural outerwear silhouette"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 28vw"
        className="object-cover object-center filter grayscale contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/25" />

      {/* Floating Product Previews */}
      <HeroProductRail />

      {/* Editorial Descriptive Text */}
      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-8 right-6 sm:right-8 z-10 text-white">
        <p className="text-[13px] sm:text-sm font-normal leading-relaxed text-white/90 max-w-xs">
          Minimal, versatile pieces crafted to move seamlessly from home to
          city, weekday to weekend — made for living well, every day.
        </p>
      </div>
    </div>
  );
}
