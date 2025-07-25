import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dpe5a0j6g/video/upload/v1752495612/Sponsoship_pghsyt.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content - Left Side */}
      <div className="relative z-10 max-w-2xl pt-32 px-8 min-h-screen flex flex-col justify-center">
        <div className="space-y-6">
          {/* Main Heading */}
          <h1 className="font-futura text-hero text-white tracking-tight leading-[1.1]">
            LIGHTING BRAND
          </h1>
          
          {/* Subheading */}
          <p className="font-manrope text-base text-white/80 font-normal max-w-lg leading-relaxed">
            Event Sponsor?
            <br />
            Family Celebration?
            <span className="block mt-2 text-white/90 font-medium">Make It Memorable.</span>
          </p>
          
          {/* CTA Button */}
          <Button className="bg-white text-black px-6 py-3 rounded-lg font-manrope text-sm font-medium uppercase hover:bg-gray-100 transition-all duration-300 tracking-wider shadow-premium">
            LIGHT IT UP →
          </Button>
        </div>
      </div>

      {/* Right Side Vertical Text */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 hidden lg:block">
        <span className="font-manrope uppercase tracking-ultra-wide text-sm text-white/60">
          MARQUEE LIGHTS · SCROLL TO PREVIEW
        </span>
      </div>

      {/* Bottom Footer Labels */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-6 z-10">
        <span className="font-manrope text-xs text-white/50">
          ✦ Founded to Light it Up, 2020
        </span>
        <span className="font-manrope text-xs text-white/60">
          ©️ LIGHTING BRAND
        </span>
      </div>
    </section>
  );
};