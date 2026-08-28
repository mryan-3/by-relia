import Image from "next/image";

export function PhilosophyVisual() {
  return (
    <div className="relative w-full max-w-130">
      {/* Editorial Base Photo */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-200">
        <Image
          src="/images/philosophy-editorial.jpg"
          alt="By.Relia structural outerwear editorial"
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-top filter grayscale contrast-105"
        />
      </div>

      {/* Overlapping Inset Studio Profile */}
      <div className="absolute top-1/2 -translate-y-1/3 -right-6 sm:-right-14 md:-right-18 w-48 sm:w-60 md:w-68 aspect-square overflow-hidden bg-neutral-100 shadow-2xl z-10">
        <Image
          src="/images/philosophy-inset.jpg"
          alt="By.Relia model side profile"
          fill
          sizes="280px"
          className="object-cover object-center filter grayscale contrast-105"
        />
        {/* Editorial Monogram Badge */}
        <span className="absolute bottom-3 left-3 text-white/80 font-editorial text-2xl font-bold tracking-tighter select-none drop-shadow-sm">
          R
        </span>
      </div>
    </div>
  );
}
