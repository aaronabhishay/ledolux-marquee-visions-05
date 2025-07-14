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
          <div className="bg-black border border-border rounded-xl p-8 min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-4xl">
              <div className="bg-black rounded-lg p-8 relative">
                {/* Marquee Lights Display */}
                <div className="flex flex-wrap justify-center gap-4 items-center min-h-[200px]">
                  {text.split('').map((char, index) => (
                    <div
                      key={index}
                      className="relative"
                      style={{
                        animationDelay: `${index * 0.15}s`
                      }}
                    >
                      {/* Main bulb container */}
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        {/* Outer glow rings */}
                        <div 
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{
                            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, rgba(255, 215, 0, 0.2) 30%, rgba(255, 215, 0, 0.1) 60%, transparent 100%)',
                            filter: 'blur(8px)',
                            transform: 'scale(1.8)',
                            animationDuration: '2s',
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                        
                        {/* Middle glow */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 215, 0, 0.3) 50%, transparent 70%)',
                            filter: 'blur(4px)',
                            transform: 'scale(1.4)'
                          }}
                        ></div>
                        
                        {/* Inner bulb */}
                        <div 
                          className="relative w-12 h-12 rounded-full flex items-center justify-center border-2 animate-pulse"
                          style={{
                            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 215, 0, 0.9), rgba(218, 165, 32, 0.8))',
                            borderColor: 'rgba(255, 215, 0, 0.8)',
                            boxShadow: `
                              0 0 10px rgba(255, 215, 0, 0.8),
                              0 0 20px rgba(255, 215, 0, 0.6),
                              0 0 30px rgba(255, 215, 0, 0.4),
                              inset 0 0 10px rgba(255, 255, 255, 0.3)
                            `,
                            animationDuration: '3s',
                            animationDelay: `${index * 0.2}s`
                          }}
                        >
                          {/* Character */}
                          <span 
                            className="font-futura text-black text-xl font-black z-10 relative drop-shadow-sm"
                            style={{
                              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                            }}
                          >
                            {char === ' ' ? '★' : char}
                          </span>
                          
                          {/* Highlight reflection */}
                          <div 
                            className="absolute top-1 left-1 w-3 h-3 rounded-full"
                            style={{
                              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
                              filter: 'blur(1px)'
                            }}
                          ></div>
                        </div>
                        
                        {/* Flickering animation overlay */}
                        <div 
                          className="absolute inset-0 rounded-full opacity-0"
                          style={{
                            background: 'rgba(255, 215, 0, 0.3)',
                            animation: `flicker 4s infinite ${index * 0.3}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-center font-manrope text-sm text-gold mt-6 opacity-80">
                ✨ Live Marquee Preview ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};