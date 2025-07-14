import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MarqueeLightsEditor } from "@/components/MarqueeLightsEditor";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MarqueeLightsEditor />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
