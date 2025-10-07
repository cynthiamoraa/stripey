import Footer from "@/components/Footer";
import HeroGradient from "@/components/HeroGradient";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import EstimateRevenue from "@/components/EstimateRevenue";
import SectionBackground from "@/components/SectionBackground";
import BusinessSupport from "@/components/BusinessSupport";
import EnterpriseCaseStudy from "@/components/EnterpriseSection";
import BillingSection from "@/components/BillingSection";
import NoCodeOptions from "@/components/NoCodeOptions";
import ProductShowcase from "@/components/ProductShowCase";
import ReadyToStop from "@/components/ReadyToStop";
import FAQSection from "@/components/FaqSection";
import MissionControl from "@/components/MissionControl";
import ConfidentialControl from "@/components/ConfidentialControl";
import Guides from "@/components/Guides";
export default function LandingPage() {
  return (
    <div className="SiteContainer">
      <HeroGradient>
        <NavBar />
        <HeroSection />
      </HeroGradient>
    
        <EstimateRevenue />
        <ConfidentialControl />
        <ProductShowcase />
        <MissionControl />
        <SectionBackground />
        <EnterpriseCaseStudy />
        <NoCodeOptions />
        <BillingSection />
        <FAQSection />
        <ReadyToStop />
        <Footer />
      
    </div>
  );
}
