import React from 'react';

interface SaritaaLogoProps {
  variant?: 'light' | 'dark' | 'plum';
  showSubtext?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SaritaaLogo: React.FC<SaritaaLogoProps> = ({
  variant = 'plum',
  showSubtext = true,
  className = '',
  size = 'md'
}) => {
  // Color combinations based on the uploaded logo image
  // Background: Deep Mauve Plum (#6B4168 / #5C385A)
  // Text: Light Lavender / Soft Blush Pink (#F2E5F2 / #E8D5E5)
  // Subtext: Soft Lilac (#E3D0E2)

  let textColor = 'text-[#F2E5F2]';
  let subtextColor = 'text-[#E3D0E2]';
  let floralColor = 'fill-[#F2E5F2]/20';

  if (variant === 'light') {
    // For light backgrounds
    textColor = 'text-[#5C385A]';
    subtextColor = 'text-[#7D537B]';
    floralColor = 'fill-[#5C385A]/15';
  } else if (variant === 'dark') {
    textColor = 'text-white';
    subtextColor = 'text-[#E8D4E5]';
    floralColor = 'fill-white/10';
  }

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* Container with flower graphics */}
      <div className="relative flex flex-col items-center">
        {/* Decorative 8-Petal Handblock Flowers from the image */}
        <svg
          viewBox="0 0 360 90"
          className={`${sizeClasses[size]} w-auto max-w-full overflow-visible`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 8-Petal Floral Pattern SVG Symbol */}
            <g id="flower-motif">
              <path
                className={floralColor}
                d="M 20 10 
                   C 20 2, 28 2, 28 10 
                   C 36 10, 36 18, 28 18 
                   C 28 26, 20 26, 20 18 
                   C 12 18, 12 10, 20 10 Z"
              />
              <circle cx="20" cy="14" r="2.5" className={floralColor} />
            </g>
          </defs>

          {/* Background Flowers Positioned Like in Image */}
          <g className="opacity-80">
            {/* Upper Right Flower */}
            <g transform="translate(260, -5) scale(1.2)">
              <use href="#flower-motif" />
            </g>
            {/* Center Right Flower */}
            <g transform="translate(200, 5) scale(1.4)">
              <use href="#flower-motif" />
            </g>
            {/* Lower Right Flower */}
            <g transform="translate(240, 48) scale(1.3)">
              <use href="#flower-motif" />
            </g>
            {/* Center Left Background Flower */}
            <g transform="translate(130, 10) scale(1.1)">
              <use href="#flower-motif" />
            </g>
            {/* Corner Leaf Sprig Left */}
            <path
              d="M 15 15 C 25 5, 30 25, 10 35 C 5 25, 10 10, 15 15 Z"
              className={floralColor}
            />
          </g>

          {/* Devanagari Calligraphic Text "सरिता" */}
          <text
            x="180"
            y="52"
            textAnchor="middle"
            fill="currentColor"
            className={`${textColor} font-serif`}
            style={{
              fontFamily: "'Rozha One', 'Yatra One', 'Tiro Devanagari Hindi', 'Rozha', 'Cinzel', serif",
              fontSize: '48px',
              fontWeight: '700',
              letterSpacing: '2px'
            }}
          >
            सरिता
          </text>
        </svg>

        {/* English Brand Subtitle & Domain */}
        {showSubtext && (
          <div className="flex flex-col items-center mt-0.5">
            <span
              className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.35em] uppercase ${subtextColor}`}
            >
              CLOTHING STORE
            </span>
            <span className={`text-[9px] font-medium tracking-[0.25em] opacity-80 ${subtextColor}`}>
              saritaa.in
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
