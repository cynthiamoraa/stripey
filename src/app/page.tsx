import Footer from "@/components/Footer";
import HeroGradient from "@/components/HeroGradient";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import TrustedCompanies from "@/components/TrustedCompanies";
import SectionBackground from "@/components/SectionBackground";
import BusinessSupport from "@/components/BusinessSupport";
import EnterpriseCaseStudy from "@/components/EnterpriseSection";
import BillingSection from "@/components/BillingSection";
import GrowthSection from "@/components/GrowthSection";
import NoCodeOptions from "@/components/NoCodeOptions";
import ProductShowcase from "@/components/ProductShowCase";
import ReadyToStop from "@/components/ReadyToStop";
import FAQSection from "@/components/FaqSection";
import MissionControl from "@/components/MissionControl";
import ConfidentialControl from "@/components/ConfidentialControl";

export default function LandingPage() {
  return (
    <div className="SiteContainer">
      <HeroGradient>
        <NavBar />
        <HeroSection />
      </HeroGradient>
      <TrustedCompanies />
      <ConfidentialControl />
      <ProductShowcase />
      <MissionControl />
      <SectionBackground />
      <BusinessSupport />
      <EnterpriseCaseStudy />
      <GrowthSection />
      <NoCodeOptions />
      <BillingSection />

      <FAQSection />
      <ReadyToStop />

      <Footer />
    </div>
  );
}
