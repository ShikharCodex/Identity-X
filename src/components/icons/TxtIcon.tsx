import React from 'react';

interface TxtIconProps {
  label: string;
}

export const TxtIcon = React.memo(({ label }: TxtIconProps) => (
  <div className="flex flex-col items-center gap-3 md:gap-4 cursor-pointer group" role="img" aria-label={`Text Document: ${label}`}>
    <div className="relative w-full aspect-[5/4] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 70 90" className="h-[90%] drop-shadow-sm" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Document body */}
        <path d="M5,0 h40 l25,25 v60 c0,2.8 -2.2,5 -5,5 H5 c-2.8,0 -5,-2.2 -5,-5 V5 c0,-2.8 2.2,-5 5,-5 Z" fill="#F8F8F8" stroke="#E5E5E5" strokeWidth="1" />
        {/* Folded corner */}
        <path d="M45,0 v20 c0,2.8 2.2,5 5,5 h20 Z" fill="#E5E5E5" />
        {/* TXT Label */}
        <text x="35" y="75" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#D4D4D4" textAnchor="middle">TXT</text>
      </svg>
    </div>
    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-black group-hover:bg-black group-hover:text-white px-2 py-0.5 rounded transition-colors text-center text-black/60">
      {label}
    </span>
  </div>
));

TxtIcon.displayName = 'TxtIcon';
