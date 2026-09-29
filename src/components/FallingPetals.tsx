import React, { useMemo } from 'react';

const FallingPetals: React.FC = () => {
  // Generate 45 realistic photographic flowers
  const flowers = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 20, // 20px to 60px
      left: Math.random() * 100, // 0 to 100vw
      duration: Math.random() * 15 + 15, // 15s to 30s fall speed
      delay: Math.random() * -30, // Start randomly in the past so screen is already full
      isGold: Math.random() > 0.85
    }));
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {flowers.map((f) => {
        // Original petal is blue. 
        // Invert(1) makes it orange/gold (perfect for f.isGold).
        // To get blue back, we hue-rotate the inverted image by 180 degrees.
        const hueFilter = f.isGold ? 'sepia(0)' : 'hue-rotate(180deg) saturate(1.5)';
        
        return (
          <div
            key={f.id}
            className="falling-flower"
            style={{
              left: `${f.left}vw`,
              width: `${f.size}px`,
              height: `${f.size}px`,
              animationDuration: `${f.duration}s`,
              animationDelay: `${f.delay}s`,
              opacity: 0.8
            }}
          >
            <img 
              src="/petal.png"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                mixBlendMode: 'lighten', // lighten strictly hides anything darker than the background
                filter: `contrast(1.5) invert(1) ${hueFilter}`,
                clipPath: 'circle(48% at 50% 50%)' // Literally cuts off the square corners
              }}
              alt="petal"
            />
          </div>
        );
      })}
    </div>
  );
};

export default FallingPetals;
