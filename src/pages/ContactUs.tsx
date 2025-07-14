import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@ledolux.com", "quotes@ledolux.com"],
      subtitle: "Get in touch for quotes and inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567"],
      subtitle: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Marquee Avenue", "Los Angeles, CA 90210"],
      subtitle: "See our workshop and showroom"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
      subtitle: "We're here when you need us"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-futura text-6xl text-foreground tracking-tight mb-8">
            CONTACT US
          </h1>
          <p className="font-manrope text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to illuminate your event? Get in touch with our team to discuss your custom marquee lights project.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-futura text-3xl text-foreground mb-8">
                GET A QUOTE
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-manrope text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-card border-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-manrope text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-card border-border"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-manrope text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-card border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="font-manrope text-foreground">
                    Event Type
                  </Label>
                  <Input
                    id="eventType"
                    placeholder="Wedding, Corporate Event, Birthday Party..."
                    className="bg-card border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-manrope text-foreground">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your vision, event details, and any specific requirements..."
                    className="bg-card border-border min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90 py-3 font-manrope uppercase tracking-wider">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-futura text-3xl text-foreground mb-8">
                GET IN TOUCH
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-gold" />
                        </div>
                        
                        <div>
                          <h3 className="font-manrope text-foreground font-medium mb-1">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="font-manrope text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="font-manrope text-sm text-muted-foreground/80 mt-2">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ */}
              <div className="mt-12 p-6 bg-muted/20 rounded-xl">
                <h3 className="font-futura text-xl text-foreground mb-4">
                  QUICK QUESTIONS?
                </h3>
                <div className="space-y-3 font-manrope text-sm text-muted-foreground">
                  <p><strong>Typical delivery time:</strong> 2-3 weeks for custom orders</p>
                  <p><strong>Service area:</strong> Nationwide delivery available</p>
                  <p><strong>Minimum order:</strong> No minimum - every event matters</p>
                  <p><strong>Installation:</strong> Full setup and breakdown included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;