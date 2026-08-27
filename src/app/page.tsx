import { HeroSection } from "@/components/hero/hero-section";
import { CuratedSection } from "@/components/curated/curated-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-[#fbfbfb]">
      <HeroSection />
      <CuratedSection />
    </main>
  );
}


