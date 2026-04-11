import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStory />
      <HowItWorks />
      <Results />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
