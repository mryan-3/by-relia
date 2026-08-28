interface InterstitialCardProps {
  tag: string;
  isHighlighted?: boolean;
  isDimmed?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

export function InterstitialCard({
  tag,
  isDimmed = false,
  onHover,
  onLeave,
}: InterstitialCardProps) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex flex-col w-full transition-opacity duration-300 ${
        isDimmed ? "opacity-30" : "opacity-100"
      }`}
    >
      <div className="relative aspect-square w-full bg-neutral-200/50 flex items-center justify-center p-6 select-none">
        <span className="text-xs font-normal text-neutral-500 tracking-tight">
          [ {tag} ]
        </span>
      </div>
      <div className="pt-3 h-14" />
    </div>
  );
}
