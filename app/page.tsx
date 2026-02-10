import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import VisionSection from "@/components/sections/VisionSection";
import MissionSection from "@/components/sections/MissionSection";
import SolutionsGridSection from "@/components/sections/SolutionsGridSection";
import GenAISection from "@/components/sections/GenAISection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import PartnersSection from "@/components/sections/PartnersSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import InsightsSection from "@/components/sections/InsightsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <VisionSection />
      <MissionSection />
      <SolutionsGridSection />
      <GenAISection />
      <ExpertiseSection />
      <TrustedBySection />
      <PartnersSection />
      {/* <ServicesSection /> */}
      <IndustriesSection />
      <CaseStudySection />
      <InsightsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
