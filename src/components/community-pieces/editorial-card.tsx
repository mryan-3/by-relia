import Image from "next/image";

interface EditorialCardProps {
  image: string;
  alt: string;
  isHighlighted?: boolean;
  isDimmed?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

export function EditorialCard({
  image,
  alt,
  isDimmed = false,
  onHover,
  onLeave,
}: EditorialCardProps) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex flex-col w-full transition-opacity duration-300 ${
        isDimmed ? "opacity-30" : "opacity-100"
      }`}
    >
      <div className="relative aspect-square w-full bg-neutral-200/70 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
        />
      </div>
      <div className="pt-3 h-14" />
    </div>
  );
}
