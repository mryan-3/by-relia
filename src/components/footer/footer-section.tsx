import { FooterCtaBanner } from "./footer-cta-banner";
import { FooterNavLinks } from "./footer-nav-links";
import { FooterNewsletter } from "./footer-newsletter";
import { FooterBottomBar } from "./footer-bottom-bar";

export function FooterSection() {
  return (
    <footer className="w-full flex flex-col bg-black text-white">
      {/* Top Floating Editorial CTA Banner */}
      <FooterCtaBanner />

      {/* Main Dark Matrix Footer */}
      <div className="relative w-full px-6 sm:px-10 lg:px-12 py-20 sm:py-28 overflow-hidden">
        {/* Ambient Architectural Edge Lettermarks */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 sm:p-10 font-editorial text-4xl sm:text-6xl font-bold text-neutral-800/40 select-none">
          <div className="flex justify-between">
            <span>B</span>
            <span>Y</span>
            <span>R</span>
          </div>
          <div className="flex justify-between">
            <span>E</span>
            <span>L</span>
            <span>A</span>
          </div>
        </div>

        {/* Center Content Block */}
        <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-16">
          <FooterNavLinks />
          <FooterNewsletter />
          <FooterBottomBar />
        </div>
      </div>
    </footer>
  );
}
