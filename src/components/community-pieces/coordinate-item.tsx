import Image from "next/image";
import { CommunityGridItem } from "@/types/community-pieces";

interface CoordinateItemProps {
  item: Extract<CommunityGridItem, { type: "product" }>;
  onSelect: () => void;
}

export function CoordinateItem({ item, onSelect }: CoordinateItemProps) {
  return (
    <div
      onClick={onSelect}
      className="flex items-center gap-3.5 p-2 bg-neutral-100/80 hover:bg-neutral-200/60 transition-colors cursor-pointer"
    >
      <div className="relative w-14 h-14 bg-neutral-200 shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="56px"
          className="object-contain p-1 mix-blend-multiply"
        />
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest">
          {item.tag}
        </span>
        <h4 className="text-xs font-medium text-black truncate tracking-tight">
          {item.name}
        </h4>
        <span className="text-xs text-neutral-700 font-normal">
          ${item.price}
        </span>
      </div>
    </div>
  );
}
