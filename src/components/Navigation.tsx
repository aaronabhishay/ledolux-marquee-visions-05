import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-white/80 font-manrope">
          <span className="uppercase tracking-ultra-wide text-sm font-medium">
            LEDOLUX
          </span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#collections" 
            className="text-white/80 hover:text-white transition-colors font-manrope text-sm font-normal tracking-wider"
          >
            COLLECTIONS
          </a>
          <a 
            href="#lighting" 
            className="text-white/80 hover:text-white transition-colors font-manrope text-sm font-normal tracking-wider"
          >
            LIGHTING
          </a>
          <a 
            href="#events" 
            className="text-white/80 hover:text-white transition-colors font-manrope text-sm font-normal tracking-wider"
          >
            EVENTS
          </a>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
};