import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  return (
    <section className="py-20 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-futura text-4xl md:text-5xl text-foreground tracking-tight mb-6">
            START YOUR PROJECT
          </h2>
          <p className="font-manrope text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your event? Get in touch with our team to discuss your vision 
            and discover how LedoLux can bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-manrope text-sm font-medium text-foreground uppercase tracking-wider mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="font-manrope"
                  />
                </div>
                <div>
                  <label className="font-manrope text-sm font-medium text-foreground uppercase tracking-wider mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="font-manrope"
                  />
                </div>
              </div>
              
              <div>
                <label className="font-manrope text-sm font-medium text-foreground uppercase tracking-wider mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="font-manrope"
                />
              </div>
              
              <div>
                <label className="font-manrope text-sm font-medium text-foreground uppercase tracking-wider mb-2 block">
                  Event Type
                </label>
                <Input 
                  placeholder="Wedding, Corporate, Birthday, etc."
                  className="font-manrope"
                />
              </div>
              
              <div>
                <label className="font-manrope text-sm font-medium text-foreground uppercase tracking-wider mb-2 block">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your vision, venue, date, and any specific requirements..."
                  rows={5}
                  className="font-manrope resize-none"
                />
              </div>
            </div>
            
            <Button className="w-full bg-gold text-gold-foreground hover:shadow-gold-glow font-manrope font-medium uppercase tracking-wider py-3">
              Send Inquiry
            </Button>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-manrope font-semibold text-foreground text-xl uppercase tracking-wider mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-manrope font-medium text-foreground uppercase tracking-wider text-sm mb-2">
                    Studio Address
                  </h4>
                  <p className="font-manrope text-muted-foreground">
                    1234 Design District<br />
                    Creative Quarter, NYC 10001<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h4 className="font-manrope font-medium text-foreground uppercase tracking-wider text-sm mb-2">
                    Contact Details
                  </h4>
                  <p className="font-manrope text-muted-foreground">
                    Phone: +1 (555) 123-4567<br />
                    Email: hello@ledolux.com<br />
                    Hours: Mon-Fri 9AM-6PM EST
                  </p>
                </div>
                
                <div>
                  <h4 className="font-manrope font-medium text-foreground uppercase tracking-wider text-sm mb-2">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a href="#" className="font-manrope text-muted-foreground hover:text-gold transition-colors text-sm uppercase tracking-wider">
                      Instagram
                    </a>
                    <a href="#" className="font-manrope text-muted-foreground hover:text-gold transition-colors text-sm uppercase tracking-wider">
                      Pinterest
                    </a>
                    <a href="#" className="font-manrope text-muted-foreground hover:text-gold transition-colors text-sm uppercase tracking-wider">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <h4 className="font-manrope font-semibold text-card-foreground uppercase tracking-wider text-sm mb-3">
                Why Choose LedoLux?
              </h4>
              <ul className="space-y-2 font-manrope text-sm text-muted-foreground">
                <li>• Premium quality lighting solutions</li>
                <li>• Custom design and installation</li>
                <li>• Expert consultation and support</li>
                <li>• Trusted by 500+ satisfied clients</li>
                <li>• Comprehensive warranty coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};