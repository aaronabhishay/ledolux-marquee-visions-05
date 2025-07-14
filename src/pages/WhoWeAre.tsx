import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Heart } from "lucide-react";

const WhoWeAre = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We blend traditional craftsmanship with modern technology to create stunning marquee light displays."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every project is crafted with dedication and attention to detail, ensuring your vision comes to life perfectly."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in bringing people together through memorable experiences that last a lifetime."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to quality means every marquee light display exceeds expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-futura text-6xl text-foreground tracking-tight mb-8">
                WHO WE ARE
              </h1>
              <div className="space-y-6 font-manrope text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 with a simple mission: to help people leave their mark. 
                  LedoLux specializes in creating custom marquee light displays that transform 
                  ordinary events into extraordinary memories.
                </p>
                <p>
                  What started as a passion project has grown into a trusted partner for 
                  event planners, businesses, and families looking to make their special 
                  moments truly unforgettable.
                </p>
                <p>
                  Every marquee light display we create tells a story — your story. 
                  From intimate family celebrations to grand corporate events, 
                  we bring your vision to life with stunning illuminated messages.
                </p>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-8">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="font-futura text-4xl text-foreground mb-2">2020</div>
                  <div className="font-manrope text-sm text-muted-foreground uppercase tracking-wider">Founded</div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="font-futura text-3xl text-gold mb-2">500+</div>
                    <div className="font-manrope text-sm text-muted-foreground">Events Illuminated</div>
                  </div>
                  <div>
                    <div className="font-futura text-3xl text-gold mb-2">50+</div>
                    <div className="font-manrope text-sm text-muted-foreground">Cities Served</div>
                  </div>
                </div>
                
                <div className="text-center border-t border-border pt-8">
                  <div className="font-manrope text-sm text-muted-foreground uppercase tracking-wider mb-2">Our Mission</div>
                  <div className="font-manrope text-foreground font-medium">
                    "To illuminate life's most important moments"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-futura text-4xl text-foreground mb-4">
              OUR VALUES
            </h2>
            <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from design to delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-futura text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="font-manrope text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-futura text-4xl text-foreground mb-8">
            THE TEAM BEHIND THE LIGHTS
          </h2>
          <div className="space-y-6 font-manrope text-lg text-muted-foreground leading-relaxed">
            <p>
              Our diverse team of designers, craftsmen, and event specialists work together 
              to bring your marquee light vision to life. Each team member brings unique 
              skills and passion to every project.
            </p>
            <p>
              From our master electricians who ensure every bulb shines perfectly, 
              to our creative designers who help you craft the perfect message, 
              we're united by one goal: making your event unforgettable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;