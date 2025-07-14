import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Type, Lightbulb, Truck, Star } from "lucide-react";

const HowThisWorks = () => {
  const steps = [
    {
      icon: Type,
      title: "Type Your Message",
      description: "Enter your custom text using our interactive marquee lights editor. See your message come to life in real-time.",
      step: "01"
    },
    {
      icon: Lightbulb,
      title: "Preview & Customize",
      description: "Watch your message illuminate with authentic marquee light effects. Adjust size, spacing, and lighting intensity.",
      step: "02"
    },
    {
      icon: Truck,
      title: "We Create & Deliver",
      description: "Our craftsmen build your custom marquee lights display and deliver it directly to your event location.",
      step: "03"
    },
    {
      icon: Star,
      title: "Make It Memorable",
      description: "Your event becomes unforgettable with a stunning, illuminated message that captures every moment.",
      step: "04"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-futura text-6xl text-foreground tracking-tight mb-8">
            HOW THIS WORKS
          </h1>
          <p className="font-manrope text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to creation, we make your message shine with custom marquee lights that transform any event into an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-gold-glow">
                        <step.icon className="w-8 h-8 text-gold-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="font-futura text-4xl text-muted-foreground/30">{step.step}</span>
                        <h3 className="font-futura text-2xl text-foreground">{step.title}</h3>
                      </div>
                      <p className="font-manrope text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-futura text-4xl text-foreground mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="font-manrope text-lg text-muted-foreground mb-8">
            Create your custom marquee lights message and bring your vision to life.
          </p>
          <Button className="bg-gold text-gold-foreground hover:bg-gold/90 px-8 py-3 font-manrope uppercase tracking-wider">
            Start Creating
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowThisWorks;