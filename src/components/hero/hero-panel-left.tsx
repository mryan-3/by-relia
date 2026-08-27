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
        className="object-cover object-center filter grayscale contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/20" />
    </div>
  );
}
