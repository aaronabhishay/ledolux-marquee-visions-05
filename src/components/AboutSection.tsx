export const AboutSection = () => {
  return (
    <section className="py-20 px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-futura text-4xl md:text-5xl text-card-foreground tracking-tight mb-6">
                CRAFTING LIGHT,
                <br />
                CREATING MOMENTS
              </h2>
              <p className="font-manrope text-muted-foreground leading-relaxed text-lg">
                Since 2020, LedoLux has been at the forefront of premium event lighting, 
                transforming ordinary spaces into extraordinary experiences. Our commitment 
                to excellence and innovation has made us the trusted choice for discerning 
                clients worldwide.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-manrope font-semibold text-card-foreground mb-2 uppercase tracking-wider">
                    BESPOKE SOLUTIONS
                  </h3>
                  <p className="font-manrope text-muted-foreground">
                    Every project is unique. We design custom lighting solutions tailored to your vision and space.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-manrope font-semibold text-card-foreground mb-2 uppercase tracking-wider">
                    PREMIUM CRAFTSMANSHIP
                  </h3>
                  <p className="font-manrope text-muted-foreground">
                    Hand-selected materials and meticulous attention to detail ensure lasting quality and beauty.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-manrope font-semibold text-card-foreground mb-2 uppercase tracking-wider">
                    FULL-SERVICE SUPPORT
                  </h3>
                  <p className="font-manrope text-muted-foreground">
                    From concept to installation, our expert team provides comprehensive support throughout your project.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="bg-gold text-gold-foreground px-8 py-3 rounded-lg font-manrope font-medium uppercase tracking-wider hover:shadow-gold-glow transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="LedoLux craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};