import { HeaderNav } from "@/components/navigation/header-nav";
import { HeroPanelLeft } from "./hero-panel-left";
import { HeroPanelCenter } from "./hero-panel-center";
import { HeroPanelRight } from "./hero-panel-right";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Editorial Navigation Overlay */}
      <HeaderNav />

      {/* 3-Column Split Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-0.5">
        <div className="lg:col-span-3">
          <HeroPanelLeft />
        </div>
        <div className="lg:col-span-6">
          <HeroPanelCenter />
        </div>
        <div className="lg:col-span-3">
          <HeroPanelRight />
        </div>
      </div>
    </section>
  );
}
