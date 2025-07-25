import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Original Navigation - Hidden on scroll */}
      <nav className={`absolute top-0 left-0 right-0 z-50 px-8 py-6 transition-opacity duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-manrope text-white/80 text-sm uppercase tracking-widest">
            LIGHTING BRAND
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex space-x-12">
            <Link to="/how-this-works" className="font-manrope text-white/80 text-sm hover:text-white transition-colors">
              HOW THIS WORKS
            </Link>
            <Link to="/who-we-are" className="font-manrope text-white/80 text-sm hover:text-white transition-colors">
              WHO WE ARE
            </Link>
            <Link to="/contact" className="font-manrope text-white/80 text-sm hover:text-white transition-colors">
              CONTACT US
            </Link>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>

      {/* Scrolled Navigation - Appears on scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border px-8 py-4 transition-transform duration-500 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-manrope text-foreground text-sm uppercase tracking-widest font-medium">
            LIGHTING BRAND
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/how-this-works" className="font-manrope text-muted-foreground text-sm hover:text-foreground transition-colors">
              HOW THIS WORKS
            </Link>
            <Link to="/who-we-are" className="font-manrope text-muted-foreground text-sm hover:text-foreground transition-colors">
              WHO WE ARE
            </Link>
            <Link to="/contact" className="font-manrope text-muted-foreground text-sm hover:text-foreground transition-colors">
              CONTACT US
            </Link>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};