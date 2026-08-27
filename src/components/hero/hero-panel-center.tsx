import Image from "next/image";

export function HeroPanelCenter() {
  return (
    <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
      <Image
        src="/images/hero-center.jpg"
        alt="By.Relia Autumn outerwear editorial"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 44vw"
        className="object-cover object-top filter grayscale contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/25" />

      {/* Bottom Center Statement */}
      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10 text-white">
        <h1 className="font-editorial text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-editorial leading-[1.08] max-w-lg">
          Defined by Form.
          <br />
          Refined by Silence.
        </h1>
      </div>
    </div>
  );
}
