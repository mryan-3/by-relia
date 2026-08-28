import { HeroSection } from "@/components/hero/hero-section";
import { CuratedSection } from "@/components/curated/curated-section";
import { PhilosophySection } from "@/components/philosophy/philosophy-section";
import { CommunitySection } from "@/components/community-pieces/community-section";
import { FooterSection } from "@/components/footer/footer-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-[#fbfbfb]">
      <HeroSection />
      <CuratedSection />
      <PhilosophySection />
      <CommunitySection />
      <FooterSection />
    </main>
  );
}





