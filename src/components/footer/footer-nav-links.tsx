import Link from "next/link";

const navItems = [
  { label: "Collections", num: "1", href: "#collections" },
  { label: "Stories", num: "2", href: "#stories" },
  { label: "Community", num: "3", href: "#shop" },
  { label: "Shop", num: "4", href: "#shop" },
];

export function FooterNavLinks() {
  return (
    <nav
      aria-label="Footer navigation"
      className="flex flex-col items-center gap-4 sm:gap-6 text-center"
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="group font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-white hover:text-neutral-400 transition-colors inline-flex items-baseline gap-2"
        >
          <span>{item.label}</span>
          <sup className="text-xs sm:text-sm font-sans font-light text-neutral-500 group-hover:text-white transition-colors tracking-tighter">
            [ {item.num} ]
          </sup>
        </Link>
      ))}
    </nav>
  );
}
