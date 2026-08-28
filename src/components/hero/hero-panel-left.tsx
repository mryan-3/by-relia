import Image from "next/image";

export function HeroPanelLeft() {
  return (
    <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
      <Image
        src="/images/hero-left.jpg"
        alt="By.Relia editorial portrait with sculpted silver jewellery"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 28vw"
        className="object-cover object-center filter grayscale contrast-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/25" />

      {/* Bottom Left Editorial Text */}
      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-10 text-white">
        <span className="text-xs uppercase tracking-widest text-white/70 font-medium">
          Edition 01
        </span>
        <p className="font-editorial text-lg sm:text-xl font-semibold tracking-tight text-white/95">
          Form in Pure Contrast.
        </p>
      </div>
    </div>
  );
}
