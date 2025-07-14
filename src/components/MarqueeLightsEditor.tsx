import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const MarqueeLightsEditor = () => {
  const [text, setText] = useState("LEDOLUX");

  return (
    <section className="min-h-screen bg-background py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Input Controls */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-futura text-4xl text-foreground tracking-tight">
                CREATE YOUR MESSAGE
              </h2>
              <p className="font-manrope text-muted-foreground text-lg">
                Type your custom message and see it come to life in marquee lights
              </p>
            </div>

            <div className="space-y-4">
              <Label htmlFor="message" className="font-manrope text-foreground font-medium">
                Your Message
              </Label>
              <Input
                id="message"
                value={text}
                onChange={(e) => setText(e.target.value.toUpperCase())}
                placeholder="Enter your message..."
                className="font-manrope text-lg py-6 bg-card border-border"
                maxLength={50}
              />
              <p className="font-manrope text-xs text-muted-foreground">
                Maximum 50 characters
              </p>
            </div>
          </div>

          {/* Right Side - Marquee Lights Preview */}
          <div className="bg-card border border-border rounded-xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="bg-ash-dark rounded-lg p-8 relative overflow-hidden">
                {/* Marquee Lights Display */}
                <div className="flex flex-wrap justify-center gap-2">
                  {text.split('').map((char, index) => (
                    <div
                      key={index}
                      className="relative w-12 h-12 bg-ash border-2 border-gold rounded-full flex items-center justify-center"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {/* Light bulb effect */}
                      <div className="absolute inset-0 rounded-full bg-gold opacity-20 animate-pulse"></div>
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gold to-accent opacity-30"></div>
                      
                      {/* Character */}
                      <span className="font-futura text-foreground text-lg font-bold z-10 relative">
                        {char === ' ' ? '•' : char}
                      </span>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full shadow-gold-glow opacity-60"></div>
                    </div>
                  ))}
                </div>

                {/* Decorative border lights */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-gold rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <p className="text-center font-manrope text-sm text-muted-foreground mt-4">
                Live Preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};