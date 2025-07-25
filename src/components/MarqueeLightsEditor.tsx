import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Import all real letter images
import realA from "@/assets/real-letters/A.png";
import realB from "@/assets/real-letters/B.png";
import realC from "@/assets/real-letters/C.png";
import realD from "@/assets/real-letters/D.png";
import realE from "@/assets/real-letters/E.png";
import realF from "@/assets/real-letters/F.png";
import realG from "@/assets/real-letters/G.png";
import realH from "@/assets/real-letters/H.png";
import realI from "@/assets/real-letters/I.png";
import realJ from "@/assets/real-letters/J.png";
import realK from "@/assets/real-letters/K.png";
import realL from "@/assets/real-letters/L.png";
import realM from "@/assets/real-letters/M.png";
import realN from "@/assets/real-letters/N.png";
import realO from "@/assets/real-letters/O.png";
import realP from "@/assets/real-letters/P.png";
import realQ from "@/assets/real-letters/Q.png";
import realR from "@/assets/real-letters/R.png";
import realS from "@/assets/real-letters/S.png";
import realT from "@/assets/real-letters/T.png";
import realU from "@/assets/real-letters/U.png";
import realV from "@/assets/real-letters/V.png";
import realW from "@/assets/real-letters/W.png";
import realX from "@/assets/real-letters/X.png";
import realY from "@/assets/real-letters/Y.png";
import realZ from "@/assets/real-letters/Z.png";

// Real letter mapping object
const realLetterImages: { [key: string]: string } = {
  'A': realA, 'B': realB, 'C': realC, 'D': realD, 'E': realE,
  'F': realF, 'G': realG, 'H': realH, 'I': realI, 'J': realJ,
  'K': realK, 'L': realL, 'M': realM, 'N': realN, 'O': realO,
  'P': realP, 'Q': realQ, 'R': realR, 'S': realS, 'T': realT,
  'U': realU, 'V': realV, 'W': realW, 'X': realX, 'Y': realY,
  'Z': realZ
};

// Function to break text into lines with max 10 characters each
const breakIntoLines = (text: string): string[] => {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    // If adding this word would exceed 10 characters, start a new line
    if (currentLine.length + word.length + (currentLine.length > 0 ? 1 : 0) > 10) {
      if (currentLine.length > 0) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        // If single word is longer than 10 characters, truncate it
        lines.push(word.substring(0, 10));
      }
    } else {
      currentLine += (currentLine.length > 0 ? ' ' : '') + word;
    }
  }
  
  if (currentLine.length > 0) {
    lines.push(currentLine);
  }
  
  return lines;
};

export const MarqueeLightsEditor = () => {
  const [text, setText] = useState("LIGHTING BRAND");

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
                <div className="flex flex-col gap-4 items-center justify-center min-h-[200px]">
                  {breakIntoLines(text).map((line, lineIndex) => (
                    <div key={lineIndex} className="flex gap-2 justify-center items-center">
                      {line.split('').map((char, charIndex) => {
                        if (char === ' ') return <div key={charIndex} className="w-4"></div>;
                        
                        const letterImage = realLetterImages[char.toUpperCase()];
                        if (!letterImage) return null;
                        
                        // Calculate size based on line length
                        const lineLength = line.replace(/\s/g, '').length;
                        const baseSize = lineLength > 8 ? 'w-12 h-12' : lineLength > 6 ? 'w-16 h-16' : 'w-20 h-20';
                        
                        return (
                          <div
                            key={charIndex}
                            className="relative animate-fade-in"
                            style={{
                              animationDelay: `${(lineIndex * 10 + charIndex) * 0.1}s`
                            }}
                          >
                            <img
                              src={letterImage}
                              alt={char.toUpperCase()}
                              className={`${baseSize} object-contain transition-all duration-300 hover:scale-110`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
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