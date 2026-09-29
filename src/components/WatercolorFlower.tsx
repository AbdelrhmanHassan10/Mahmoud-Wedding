import React from 'react';

interface WatercolorFlowerProps {
  color1?: string;
  color2?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  simplify?: boolean;
}

export const WatercolorFlower: React.FC<WatercolorFlowerProps> = ({ 
  color1 = "#2c486b", 
  color2 = "#8ba3ba", 
  size = 100,
  className,
  style,
  simplify = false
}) => {
  const id = React.useId().replace(/:/g, '');
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className} 
      style={{ overflow: 'visible', ...style }}
    >
      <defs>
        {!simplify && (
          <filter id={`watercolor-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="2" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" opacity="0.7" />
            </feMerge>
          </filter>
        )}
        <radialGradient id={`petalGrad-${id}`} cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor={color1} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color2} stopOpacity="0.1" />
        </radialGradient>
        <radialGradient id={`centerGrad-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c5a059" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#8c6b22" stopOpacity="0.5" />
        </radialGradient>
      </defs>
      
      <g filter={simplify ? undefined : `url(#watercolor-${id})`}>
        {/* Layer 1: Larger petals */}
        {[0, 72, 144, 216, 288].map((angle) => (
          <g key={`l1-${angle}`} transform={`rotate(${angle}, 100, 100)`}>
            <path 
              d="M100,100 C40,10 160,10 100,100" 
              fill={`url(#petalGrad-${id})`} 
            />
          </g>
        ))}
        {/* Layer 2: Smaller petals */}
        {[36, 108, 180, 252, 324].map((angle) => (
          <g key={`l2-${angle}`} transform={`rotate(${angle}, 100, 100)`}>
            <path 
              d="M100,100 C60,30 140,30 100,100" 
              fill={`url(#petalGrad-${id})`} 
            />
          </g>
        ))}
        {/* Center */}
        <circle cx="100" cy="100" r="14" fill={`url(#centerGrad-${id})`} />
        {/* Stamen dots */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
          <circle 
            key={`dot-${angle}`}
            cx="100" cy="80" r="3" 
            fill="#e8d099" 
            transform={`rotate(${angle}, 100, 100)`} 
          />
        ))}
      </g>
    </svg>
  );
};

export const WatercolorLeaf: React.FC<WatercolorFlowerProps> = ({ 
  color1 = "#c5a059", 
  color2 = "#e8d099", 
  size = 100,
  className,
  style,
  simplify = false
}) => {
  const id = React.useId().replace(/:/g, '');
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className} 
      style={{ overflow: 'visible', ...style }}
    >
      <defs>
        {!simplify && (
          <filter id={`leaf-watercolor-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="1.5" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" opacity="0.8" />
            </feMerge>
          </filter>
        )}
        <linearGradient id={`leafGrad-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color1} stopOpacity="0.85" />
          <stop offset="100%" stopColor={color2} stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <g filter={simplify ? undefined : `url(#leaf-watercolor-${id})`}>
        <path d="M20,180 C20,80 120,20 180,20 C180,120 80,180 20,180 Z" fill={`url(#leafGrad-${id})`} />
        <path d="M20,180 L180,20" stroke={color1} strokeWidth="3" opacity="0.6" />
      </g>
    </svg>
  );
};
