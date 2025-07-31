import React, { useState, useRef, useEffect } from 'react';

interface Marquee3DProps {
  text: string;
  background?: 'black' | 'room' | 'event' | 'wreath' | 'bar';
}

interface Position {
  x: number;
  y: number;
}

const MarqueeLetter = ({ letter }: { letter: string }) => {
  if (letter === ' ') return <div className="w-0"></div>;
  
  // Only render if it's a letter (A-Z)
  if (!/[A-Za-z]/.test(letter)) return <div className="w-0"></div>;
  
  // Fix H alignment and size specifically, and make W bigger and lower
  const isH = letter.toUpperCase() === 'H';
  const isW = letter.toUpperCase() === 'W';
  const sizeClass = isH ? 'w-16 h-20' : isW ? 'w-36 h-40' : 'w-28 h-32';
  const marginClass = isH ? 'mx-1' : '-mx-6';
  
  return (
    <div 
      className={`relative ${sizeClass} ${marginClass} inline-block flex items-center justify-center marquee-letter`}
      style={{ 
        transform: isH ? 'translateY(-5px)' : isW ? 'translateY(-2px)' : 'none'
      }}
    >
      {/* Letter image */}
      <img 
        src={`/letters/${letter.toUpperCase()}.png`}
        alt={letter}
        className="w-full h-full object-contain"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 12px rgba(255, 165, 0, 0.4))',
          imageRendering: 'crisp-edges'
        }}
        onError={(e) => {
          // Fallback if image doesn't exist
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    </div>
  );
};

const getBackgroundStyle = (background: string) => {
  if (background === 'black') {
    return {
      background: '#000000'
    };
  }
  
  // Map background names to actual filenames
  const backgroundMap: { [key: string]: string } = {
    'room': 'room.jpg',
    'event': 'event.jpg',
    'wreath': 'beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg',
    'bar': 'BAR.jpeg'
  };
  
  const filename = backgroundMap[background];
  if (!filename) {
    return { background: '#000000' };
  }
  
  return {
    backgroundImage: `url(/backgrounds/${filename})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};

export const Marquee3D = ({ text, background = 'black' }: Marquee3DProps) => {
  const backgroundStyle = getBackgroundStyle(background);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  // State for position
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === textRef.current || textRef.current?.contains(e.target as Node)) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
      e.preventDefault();
    }
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle double click for reset
  const handleDoubleClick = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Add global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove as any);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove as any);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-[400px] rounded-lg flex items-center justify-center p-8 relative overflow-hidden cursor-move"
      style={backgroundStyle}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onDoubleClick={handleDoubleClick}
    >
      {/* Instructions overlay */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs font-manrope z-20">
        Drag to move • Double-click to reset
      </div>
      
      {/* Text container */}
      <div 
        ref={textRef}
        className="flex flex-wrap gap-0 justify-center items-center max-w-full relative z-10 select-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: isDragging ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {text.split(' ').map((word, wordIndex) => (
          <div key={wordIndex} className="flex gap-0 items-center">
            {word.split('').map((char, charIndex) => (
              <MarqueeLetter 
                key={`${wordIndex}-${charIndex}`} 
                letter={char}
              />
            ))}
            {/* Add space between words */}
            {wordIndex < text.split(' ').length - 1 && (
              <div className="w-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};