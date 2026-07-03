import React from 'react';

interface FolderIconProps {
  color?: string;
  label: string;
}

export const FolderIcon = React.memo(({ color = "#FFF000", label }: FolderIconProps) => (
  <div className="flex flex-col items-center gap-3 md:gap-4 cursor-pointer group" role="img" aria-label={`Folder: ${label}`}>
    <div className="relative w-full aspect-[5/4] transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Back folder tab */}
        <path d="M4,6 h26 c2,0 3,1 4,3 l2,5 h60 c2.2,0 4,1.8 4,4 v58 c0,2.2 -1.8,4 -4,4 H4 c-2.2,0 -4,-1.8 -4,-4 V10 c0,-2.2 1.8,-4 4,-4 Z" fill={color} opacity="0.95" />
        {/* Front folder cover */}
        <path d="M0,22 c0,-2.2 1.8,-4 4,-4 h92 c2.2,0 4,1.8 4,4 v54 c0,2.2 -1.8,4 -4,4 H4 c-2.2,0 -4,-1.8 -4,-4 V22 Z" fill={color} />
        {/* Highlight on front cover top edge */}
        <path d="M4,18 h92 c2.2,0 4,1.8 4,4 v1.5 H0 v-1.5 c0,-2.2 1.8,-4 4,-4 Z" fill="#ffffff" opacity="0.4" />
      </svg>
    </div>
    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-black group-hover:bg-black group-hover:text-white px-2 py-0.5 rounded transition-colors text-center">
      {label}
    </span>
  </div>
));

FolderIcon.displayName = 'FolderIcon';
