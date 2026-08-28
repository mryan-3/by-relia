"use client";

interface CuratedNavProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

const categories = [
  { id: "all", label: "Best Sellers", index: "1" },
  { id: "newarrivals", label: "New Arrivals", index: "2" },
  { id: "essentials", label: "Everyday Essentials", index: "3" },
  { id: "limited", label: "Limited Edition", index: "4" },
];

export function CuratedNav({ activeTab, onSelectTab }: CuratedNavProps) {
  return (
    <div className="flex flex-col items-start gap-1.5">
      {categories.map((cat) => {
        const isActive = activeTab === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectTab(cat.id)}
            className={`group text-left text-sm sm:text-base transition-colors cursor-pointer ${
              isActive
                ? "font-semibold text-black"
                : "font-normal text-neutral-500 hover:text-black"
            }`}
          >
            <span>{cat.label}</span>
            <sup className="text-xs ml-0.5 tracking-tighter opacity-80">
              [{cat.index}]
            </sup>
          </button>
        );
      })}
    </div>
  );
}
