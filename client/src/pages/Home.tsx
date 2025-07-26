import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import GlobalPresence from "@/components/GlobalPresence";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TechnologyShowcase />
      <GlobalPresence />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
