import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  showText = true,
  textColor = 'text-white',
  subtextColor = 'text-slate-400',
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Symbol Container */}
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain"
        >
          <defs>
            {/* Layered drop shadows matching Final Logo geometry */}
            <filter id="logo-drop-shadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="3" dy="8" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.2" />
            </filter>
            <filter id="layer-shadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="5" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.25" />
            </filter>
            <filter id="pillar-shadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.18" />
            </filter>
            <linearGradient id="blue-primary-grad" x1="230" y1="230" x2="760" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2F80ED" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D6FE5" />
            </linearGradient>
          </defs>

          {/* 1. Right White Pillar with curved lower-left fillet */}
          <path
            d="M 546 470 L 546 620 C 546 705 586 755 648 755 L 648 368 Z"
            fill="#FFFFFF"
            filter="url(#pillar-shadow)"
          />

          {/* 2. Fin 3: Bottom-Left Blue Triangle */}
          <path
            d="M 260 675 L 383 590 L 383 755 Z"
            fill="#2563EB"
            filter="url(#logo-drop-shadow)"
          />

          {/* 3. Fin 2: Middle White Chevron Ribbon */}
          <path
            d="M 260 644 L 383 560 L 328 608 L 383 672 Z"
            fill="#FFFFFF"
            filter="url(#layer-shadow)"
          />

          {/* 4. Main Dynamic Blue M-Wing & Fin 1 */}
          <path
            d="M 760 230 L 458 595 L 383 503 L 383 560 L 260 465 L 315 415 L 230 295 L 450 405 Z"
            fill="url(#blue-primary-grad)"
            filter="url(#layer-shadow)"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className={`font-black tracking-tight text-lg sm:text-xl ${textColor}`}>
              My<span className="text-blue-500 font-extrabold">3D</span>Vision
            </span>
          </div>
          <span className={`text-[10px] sm:text-[11px] font-medium tracking-wide mt-0.5 ${subtextColor}`}>
            Studio & Masterclasses
          </span>
        </div>
      )}
    </div>
  );
};
