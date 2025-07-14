import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Import all letter images
import letterA from "@/assets/letters/A.png";
import letterB from "@/assets/letters/B.png";
import letterC from "@/assets/letters/C.png";
import letterD from "@/assets/letters/D.png";
import letterE from "@/assets/letters/E.png";
import letterF from "@/assets/letters/F.png";
import letterG from "@/assets/letters/G.png";
import letterH from "@/assets/letters/H.png";
import letterI from "@/assets/letters/I.png";
import letterJ from "@/assets/letters/J.png";
import letterK from "@/assets/letters/K.png";
import letterL from "@/assets/letters/L.png";
import letterM from "@/assets/letters/M.png";
import letterN from "@/assets/letters/N.png";
import letterO from "@/assets/letters/O.png";
import letterP from "@/assets/letters/P.png";
import letterQ from "@/assets/letters/Q.png";
import letterR from "@/assets/letters/R.png";
import letterS from "@/assets/letters/S.png";
import letterT from "@/assets/letters/T.png";
import letterU from "@/assets/letters/U.png";
import letterV from "@/assets/letters/V.png";
import letterW from "@/assets/letters/W.png";
import letterX from "@/assets/letters/X.png";
import letterY from "@/assets/letters/Y.png";
import letterZ from "@/assets/letters/Z.png";
import letterStar from "@/assets/letters/STAR.png";

// Letter mapping object
const letterImages: { [key: string]: string } = {
  'A': letterA, 'B': letterB, 'C': letterC, 'D': letterD, 'E': letterE,
  'F': letterF, 'G': letterG, 'H': letterH, 'I': letterI, 'J': letterJ,
  'K': letterK, 'L': letterL, 'M': letterM, 'N': letterN, 'O': letterO,
  'P': letterP, 'Q': letterQ, 'R': letterR, 'S': letterS, 'T': letterT,
  'U': letterU, 'V': letterV, 'W': letterW, 'X': letterX, 'Y': letterY,
  'Z': letterZ, ' ': letterStar
};

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
            <div className="w-full max-w-5xl">
              <div className="bg-black rounded-lg p-8 relative">
                {/* Marquee Lights Display */}
                <div className="flex flex-wrap justify-center gap-4 items-center min-h-[200px]">
                  {text.split('').map((char, index) => {
                    const letterImage = letterImages[char.toUpperCase()] || letterImages[' '];
                    return (
                      <div
                        key={index}
                        className="relative animate-fade-in"
                        style={{
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        <img
                          src={letterImage}
                          alt={char === ' ' ? 'space' : char.toUpperCase()}
                          className="w-20 h-20 object-contain transition-all duration-300 hover:scale-110"
                          style={{
                            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.3))',
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Ambient lighting effect */}
                <div 
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
                  }}
                ></div>
              </div>
              
              <p className="text-center font-manrope text-sm text-gold mt-6 opacity-80">
                ✨ Realistic Marquee Preview ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};