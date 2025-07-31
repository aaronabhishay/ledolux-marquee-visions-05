import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Marquee3D } from "./Marquee3D";

const backgroundOptions = [
  { value: 'black', label: 'Classic Black', description: 'Clean black background' },
  { value: 'room', label: 'Elegant Room', description: 'Sophisticated interior setting' },
  { value: 'event', label: 'Event Space', description: 'Perfect for celebrations' },
  { value: 'wreath', label: 'Festive Wreath', description: 'Beautiful holiday decoration' },
  { value: 'bar', label: 'Bar Scene', description: 'Perfect for nightlife and entertainment' },
];

export const MarqueeLightsEditor = () => {
  const [text, setText] = useState("HELLO");
  const [background, setBackground] = useState<string>("black");

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

            <div className="space-y-4">
              <Label htmlFor="background" className="font-manrope text-foreground font-medium">
                Background Style
              </Label>
              <Select value={background} onValueChange={setBackground}>
                <SelectTrigger className="font-manrope text-lg py-6 bg-card border-border hover:bg-accent/50 transition-colors">
                  <SelectValue>
                    {backgroundOptions.find(option => option.value === background) && (
                      <div className="flex flex-col items-start">
                        <span className="font-medium text-foreground">
                          {backgroundOptions.find(option => option.value === background)?.label}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {backgroundOptions.find(option => option.value === background)?.description}
                        </span>
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {backgroundOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="font-manrope">
                      <div className="flex flex-col py-1">
                        <span className="font-medium text-foreground">{option.label}</span>
                        <span className="text-xs text-muted-foreground mt-0.5">{option.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="font-manrope text-xs text-muted-foreground">
                Select a background to enhance your marquee display
              </p>
            </div>
          </div>

          {/* Right Side - Marquee Preview */}
          <div className="relative">
            <div className="border border-border rounded-xl p-8 min-h-[400px] flex items-center justify-center overflow-hidden relative">
              <Marquee3D text={text} background={background as any} />
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