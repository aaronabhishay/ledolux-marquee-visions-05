import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
