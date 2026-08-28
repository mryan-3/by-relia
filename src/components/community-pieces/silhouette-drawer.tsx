"use client";

import Image from "next/image";
import { CommunityGridItem, communityItems } from "@/types/community-pieces";
import { CoordinateItem } from "./coordinate-item";

interface SilhouetteDrawerProps {
  item: Extract<CommunityGridItem, { type: "product" }> | null;
  onClose: () => void;
  onSelectPiece: (piece: Extract<CommunityGridItem, { type: "product" }>) => void;
}

export function SilhouetteDrawer({
  item,
  onClose,
  onSelectPiece,
}: SilhouetteDrawerProps) {
  if (!item) return null;

  const coordinates = communityItems.filter(
    (p): p is Extract<CommunityGridItem, { type: "product" }> =>
      p.type === "product" && p.lookId === item.lookId && p.id !== item.id
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white h-full overflow-y-auto p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Curated Silhouette
          </span>
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="text-neutral-500 hover:text-black text-lg cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Primary Selected Garment */}
        <div className="flex flex-col gap-3">
          <div className="relative aspect-square w-full bg-neutral-200/70 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="380px"
              className="object-contain p-6 mix-blend-multiply"
            />
          </div>
          <div className="flex justify-between items-baseline pt-1">
            <h3 className="font-editorial text-lg font-semibold text-black tracking-tight">
              {item.name}
            </h3>
            <span className="text-sm font-medium text-black">${item.price}</span>
          </div>
          <span className="text-xs text-neutral-500">[ {item.tag} ]</span>
        </div>

        {/* Coordinated Ensemble Pieces */}
        {coordinates.length > 0 && (
          <div className="flex flex-col gap-3 pt-2 border-t border-neutral-200">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
              Styled Coordinates ({coordinates.length})
            </span>
            <div className="flex flex-col gap-2">
              {coordinates.map((coord) => (
                <CoordinateItem
                  key={coord.id}
                  item={coord}
                  onSelect={() => onSelectPiece(coord)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
