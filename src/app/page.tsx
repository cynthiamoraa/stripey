import Footer from "@/components/Footer";
import HeroGradient from "@/components/HeroGradient";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";


export default function LandingPage() {
  return (
    <div className="SiteContainer">
      <HeroGradient>
        <NavBar />
        
        <HeroSection />
      </HeroGradient>
      <Footer />
    </div>
  );
}
