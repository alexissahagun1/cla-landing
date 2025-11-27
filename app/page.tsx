import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BrandsBanner from "./components/BrandsBanner";
import AboutSection from "./components/AboutSection";
import BranchesSection from "./components/BranchesSection";
import WholesaleSection from "./components/WholesaleSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BrandsBanner />
      <AboutSection />
      <BranchesSection />
      <WholesaleSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

