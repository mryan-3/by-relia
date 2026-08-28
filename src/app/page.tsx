import { HeroSection } from "@/components/hero/hero-section";
import { CuratedSection } from "@/components/curated/curated-section";
import { PhilosophySection } from "@/components/philosophy/philosophy-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-[#fbfbfb]">
      <HeroSection />
      <CuratedSection />
      <PhilosophySection />
    </main>
  );
}



