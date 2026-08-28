import Image from "next/image";

export function PhilosophyVisual() {
  return (
    <div className="relative w-full">
      {/* Wide 16:9 Editorial Base Landscape */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-200">
        <Image
          src="/images/philosophy-editorial.jpg"
          alt="By.Relia wide coastal editorial landscape"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center filter grayscale contrast-105"
        />
      </div>

      {/* Overlapping Inset Studio Profile */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-10 md:-right-14 w-44 sm:w-56 md:w-64 aspect-square overflow-hidden bg-neutral-100 shadow-2xl z-10">
        <Image
          src="/images/philosophy-inset.jpg"
          alt="By.Relia model side profile"
          fill
          sizes="260px"
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
