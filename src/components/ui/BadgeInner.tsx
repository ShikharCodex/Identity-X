import React from 'react';
import type { Badge } from "@/types";

export const BadgeInner = React.memo(({ badge }: { badge: Badge }) => (
  <>
    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#f5f5f5] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] z-30" />
    <div className="mt-8 mb-12 font-bold tracking-tighter text-xl flex items-center">
      Shikhar
    </div>
    <div className="flex flex-col gap-1 mb-4">
      <span className="text-xs font-bold leading-tight">{badge.company}</span>
      <span className="text-[10px] font-medium opacity-80">{badge.date}</span>
    </div>
    <div className="w-full h-px opacity-20 mb-auto" style={{ backgroundColor: badge.textColor }} />
    <div className="flex flex-col mb-16">
      <h2 className="text-3xl font-black tracking-tighter mb-1">{badge.role}</h2>
      <span className="text-[8px] uppercase tracking-widest font-bold opacity-60">{badge.access}</span>
    </div>
    <div className="flex justify-between items-end">
      <span className="text-[8px] opacity-60 font-medium">Shikhar.X</span>
      <span className="text-xl font-bold leading-none mb-1">t.</span>
    </div>
  </>
));

BadgeInner.displayName = "BadgeInner";
