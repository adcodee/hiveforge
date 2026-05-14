import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import BrandStory from "@/components/BrandStory";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import ChatbotDemo from "@/components/ChatbotDemo";
import Testimonials from "@/components/Testimonials";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBadges />
      <BrandStory />
      <HowItWorks />
      <BeforeAfterGallery />
      <PortfolioShowcase />
      <Results />
      <Pricing />
      <ChatbotDemo />
      <Testimonials />
      <ServiceAreaMap />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </main>
  );
}
