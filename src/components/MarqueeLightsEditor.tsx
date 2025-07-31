import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Marquee3D } from "./Marquee3D";

export const MarqueeLightsEditor = () => {
  const [text, setText] = useState("HELLO");

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

          {/* Right Side - Marquee Preview */}
          <div className="relative">
            <div className="bg-black border border-border rounded-xl p-8 min-h-[400px] flex items-center justify-center overflow-hidden relative">
              <Marquee3D text={text} />
            </div>
            
            <p className="text-center font-manrope text-sm text-gold mt-6 opacity-80 animate-pulse-glow">
              ✨ Marquee Preview ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};