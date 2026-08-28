import Link from "next/link";
import {
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/ui/social-icons";

export function FooterBottomBar() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-neutral-900 text-xs text-neutral-500">
      {/* Copyright */}
      <span className="order-3 md:order-1 text-center md:text-left">
        Copyright BY.RELIA 2026. All right reserved.
      </span>

      {/* Social Links */}
      <div className="order-1 md:order-2 flex items-center gap-5 text-neutral-400">
        <a
          href="#instagram"
          aria-label="Instagram"
          className="hover:text-white transition-colors"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
        <a
          href="#linkedin"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href="#x"
          aria-label="X Twitter"
          className="hover:text-white transition-colors"
        >
          <XIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Policy Links */}
      <div className="order-2 md:order-3 flex items-center gap-4 text-center md:text-right">
        <Link href="#faqs" className="hover:text-neutral-300 transition-colors">
          Purchase Faqs
        </Link>
        <Link href="#terms" className="hover:text-neutral-300 transition-colors">
          Terms &amp; Conditions
        </Link>
        <Link href="#privacy" className="hover:text-neutral-300 transition-colors">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
