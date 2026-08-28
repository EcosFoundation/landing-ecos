import { Hero } from "@/components/home/Hero";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { NexoSection } from "@/components/home/NexoSection";
import { AlliesSection } from "@/components/home/AlliesSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { NewsSection } from "@/components/home/NewsSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { ScrollProgress } from "@/components/home/ScrollProgress";

export function HomePage() {
  return (
    <>
      <main>
        <ScrollProgress />
        <Hero />
        <ProcessSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <CommunitySection />
        <NexoSection />
        <AlliesSection />
        <ImpactSection />
        <NewsSection />
      </main>
      <SiteFooter />
    </>
  );
}
