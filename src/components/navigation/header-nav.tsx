"use client";

import Link from "next/link";
import { HeartIcon, UserIcon } from "@/components/ui/icons";

export function HeaderNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 py-6 text-white pointer-events-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-0 items-start text-xs sm:text-sm tracking-tight font-medium">
        {/* Left / Brand + Nav Links */}
        <div className="w-full lg:w-auto lg:col-span-4 flex flex-col gap-4 sm:gap-5">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link
              href="/"
              className="font-editorial text-2xl sm:text-3xl font-extrabold tracking-tighter uppercase leading-none"
            >
              By.Relia
            </Link>
            {/* Mobile-Only Actions */}
            <div className="flex lg:hidden items-center gap-4 text-white/90">
              <Link href="#wishlist" aria-label="Wishlist">
                <HeartIcon className="w-4.5 h-4.5" />
              </Link>
              <Link href="#account" aria-label="Account">
                <UserIcon className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-white/90">
            <Link href="#collections" className="hover:text-white transition-opacity">Collections</Link>
            <Link href="#stories" className="hover:text-white transition-opacity">Stories</Link>
            <Link href="#community" className="hover:text-white transition-opacity">Community</Link>
            <Link href="#shop" className="hover:text-white transition-opacity">Shop</Link>
          </nav>
        </div>

        {/* Center / Seasonal Label */}
        <div className="hidden lg:block lg:col-span-4 text-center text-white/80">
          <p className="font-light">By.Relia</p>
          <p className="text-white/60 text-xs">— Autumn / Winter Collection</p>
        </div>

        {/* Right / Desktop Actions */}
        <div className="hidden lg:flex lg:col-span-4 items-center justify-end gap-6 text-white/90">
          <button className="hover:text-white transition-colors cursor-pointer">
            Search
          </button>
          <Link href="#wishlist" className="hover:text-white transition-colors">
            Wishlist (0)
          </Link>
          <div className="flex items-center gap-4">
            <button aria-label="Wishlist" className="hover:text-white cursor-pointer">
              <HeartIcon className="w-4.5 h-4.5" />
            </button>
            <button aria-label="Account" className="hover:text-white cursor-pointer">
              <UserIcon className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
