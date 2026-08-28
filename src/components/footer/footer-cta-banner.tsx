import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/social-icons";

export function FooterCtaBanner() {
  return (
    <div className="relative w-full h-115 sm:h-135 overflow-hidden">
      {/* Overhead High Fashion Photography Background */}
      <Image
        src="/images/footer-cta-editorial.jpg"
        alt="By.Relia editorial overhead models with mirror reflections"
        fill
        sizes="100vw"
        className="object-cover object-center filter grayscale contrast-105"
      />

      {/* Floating White Editorial Invitation Card */}
      <div className="absolute top-8 sm:top-16 left-6 right-6 sm:right-auto sm:left-12 max-w-lg bg-white p-6 sm:p-10 shadow-2xl flex flex-col gap-5 sm:gap-6 z-10">
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Join Us, Will You?
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-black font-semibold tracking-tight leading-snug">
            Build a Wardrobe You&apos;ll Reach for Every Day.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-2">
          <p className="text-xs text-neutral-600 leading-relaxed max-w-xs font-normal">
            Timeless essentials designed for comfort, simplicity, and modern
            living.
          </p>

          <Link
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
