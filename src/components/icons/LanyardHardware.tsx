import React from 'react';

interface LanyardHardwareProps {
  strapColor?: string;
  text?: string;
}

export const LanyardHardware = React.memo(({ strapColor = "#e5e5e5", text = "SIMULATION" }: LanyardHardwareProps) => (
  <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 flex flex-col items-center z-0 w-24">
    <div
      className="w-8 h-[180px] shadow-sm relative overflow-hidden flex flex-col justify-end pb-4 items-center"
      style={{ backgroundColor: strapColor }}
    >
      <span
        className="text-[8px] font-bold uppercase tracking-widest"
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          color: strapColor === '#111111' ? '#ffffff' : '#000000'
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="text-xs font-black mt-4"
        style={{ color: strapColor === '#111111' ? '#ffffff' : '#000000' }}
        aria-hidden="true"
      >
        1.
      </span>
    </div>
    <svg width="40" height="80" viewBox="0 0 40 80" className="-mt-1 drop-shadow-md z-10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="0" width="16" height="8" fill={strapColor} />
      <path d="M10,8 h20 c5,0 8,3 8,8 v2 c0,5 -3,8 -8,8 h-20 c-5,0 -8,-3 -8,-8 v-2 c0,-5 3,-8 8,-8 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1.5" />
      <rect x="16" y="26" width="8" height="12" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1.5" />
      <rect x="12" y="36" width="16" height="6" rx="2" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1.5" />
      <path d="M14,42 c0,0 -4,15 -2,25 c2,10 6,10 8,10 c2,0 6,0 8,-10 c2,-10 -2,-25 -2,-25 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
      <path d="M18,48 c0,0 -2,10 0,15 c1,2.5 3,2.5 4,0 c2,-5 0,-15 0,-15 Z" fill="#f5f5f5" />
      <circle cx="20" cy="74" r="5" fill="none" stroke="#9ca3af" strokeWidth="2.5" />
    </svg>
  </div>
));

LanyardHardware.displayName = "LanyardHardware";
