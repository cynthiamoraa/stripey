import Footer from "@/components/Footer";
import HeroGradient from "@/components/HeroGradient";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import TrustedCompanies from "@/components/TrustedCompanies";
import SectionBackground from "@/components/SectionBackground";

export default function LandingPage() {
  return (
    <div className="SiteContainer">
      <HeroGradient>
        <NavBar />

        <HeroSection />
      </HeroGradient>

      <TrustedCompanies />
      <SectionBackground />
       

      <Footer />
    </div>
  );
}
