import React from 'react';

interface Marquee3DProps {
  text: string;
}

const MarqueeLetter = ({ letter }: { letter: string }) => {
  if (letter === ' ') return <div className="w-0"></div>;
  
  // Only render if it's a letter (A-Z)
  if (!/[A-Za-z]/.test(letter)) return <div className="w-0"></div>;
  
  // Fix H alignment and size specifically, and make W bigger and lower
  const isH = letter.toUpperCase() === 'H';
  const isW = letter.toUpperCase() === 'W';
  const sizeClass = isH ? 'w-16 h-20' : isW ? 'w-36 h-40' : 'w-28 h-32';
  const marginClass = isH ? 'mx-3' : '-mx-4';
  
  return (
    <div 
      className={`relative ${sizeClass} ${marginClass} inline-block`}
      style={{ 
        transform: isH ? 'translateY(-28px)' : isW ? 'translateY(15px)' : 'none'
      }}
    >
      {/* Letter image */}
      <img 
        src={`/letters/${letter.toUpperCase()}.png`}
        alt={letter}
        className="w-full h-full object-contain"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 12px rgba(255, 165, 0, 0.4))'
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

export const Marquee3D = ({ text }: Marquee3DProps) => {
  return (
    <div className="w-full h-full min-h-[400px] bg-black rounded-lg flex items-center justify-center p-8">
      <div className="flex flex-wrap gap-0 justify-center items-end max-w-full">
        {text.split(' ').map((word, wordIndex) => (
          <div key={wordIndex} className="flex gap-0 items-end">
            {word.split('').map((char, charIndex) => (
              <MarqueeLetter key={`${wordIndex}-${charIndex}`} letter={char} />
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