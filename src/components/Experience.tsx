"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LanyardHardware } from "./icons/LanyardHardware";
import { BadgeInner } from "./ui/BadgeInner";
import { BADGES } from "@/constants";

const SPRING = { type: "spring" as const, bounce: 0, duration: 0.4 };

export default function Experience() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedBadge = BADGES.find(b => b.id === selectedId);

  // Lock body scroll when modal is open to prevent jitter and layout shifts
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  return (
    <section id="experience" className="relative w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center py-32 overflow-hidden" style={{ perspective: '1000px' }}>

      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[clamp(4rem,18vw,25rem)] font-black tracking-tighter text-black/[0.03] select-none text-center leading-none">
          EXPERIENCE
        </h1>
      </div>

      {/* Mobile Horizontal Scroll Container */}
      <div
        className="relative z-10 flex overflow-x-auto pb-16 pt-[250px] px-[10vw] xl:px-0 gap-12 md:gap-16 xl:gap-20 w-full snap-x snap-mandatory justify-start xl:justify-center items-start"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

        {BADGES.map((badge) => (
          <motion.div
            key={badge.id}
            className="relative flex flex-col items-center cursor-pointer group shrink-0 snap-center"
            style={{ marginTop: `${badge.yOffset}px` }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            onClick={() => setSelectedId(badge.id)}
          >
            <motion.div animate={{ opacity: selectedId === badge.id ? 0 : 1 }} transition={{ duration: 0.2 }}>
              <LanyardHardware strapColor={badge.strapColor} text={badge.role} />
            </motion.div>

            <motion.div
              layout
              layoutId={`badge-card-${badge.id}`}
              transition={SPRING}
              className="w-[280px] h-[420px] rounded-2xl p-8 flex flex-col relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
              style={{ backgroundColor: badge.bgColor, color: badge.textColor }}
            >
              <BadgeInner badge={badge} />
            </motion.div>
          </motion.div>
        ))}

        {/* iOS Flex Scroll Padding Bug Fix */}
        <div className="w-[5vw] xl:hidden shrink-0 pointer-events-none" />
      </div>

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {selectedId && selectedBadge && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-12 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>

            {/* Backdrop: Reduced blur significantly for butter-smooth mobile GPU rendering */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#f5f5f5]/95 backdrop-blur-[2px] cursor-pointer"
              onClick={() => setSelectedId(null)}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:gap-12 items-center lg:items-stretch max-w-[1000px] w-full my-auto py-12 lg:py-0">

              {/* ID Card - Stays full size, sits behind on mobile */}
              <div className="shrink-0 flex justify-center w-full lg:w-auto relative z-0">
                <motion.div
                  layout
                  layoutId={`badge-card-${selectedBadge.id}`}
                  transition={SPRING}
                  className="w-[280px] h-[420px] rounded-2xl p-8 flex flex-col relative shadow-[0_40px_100px_rgba(0,0,0,0.3)] mx-auto lg:mx-0"
                  style={{ backgroundColor: selectedBadge.bgColor, color: selectedBadge.textColor }}
                >
                  <BadgeInner badge={selectedBadge} />
                </motion.div>
              </div>

              {/* Role Details Panel - Slides up over the ID card on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ ...SPRING, delay: 0.1 }}
                className="relative z-10 flex-1 bg-white text-black p-5 sm:p-8 md:p-10 rounded-[2rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] lg:shadow-2xl border border-black/5 overflow-y-auto max-h-[60vh] lg:max-h-[80vh] w-[96%] sm:w-[90%] lg:w-full mx-auto -mt-[180px] lg:mt-0"
              >
                <div className="flex justify-between items-start mb-4 sm:mb-6 border-b border-black/10 pb-3 sm:pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tighter mb-1">{selectedBadge.role}</h3>
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-bold opacity-50 block leading-tight">{selectedBadge.company} | {selectedBadge.date}</span>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-black/10 transition-colors text-black font-bold ml-4 shadow-sm"
                    aria-label="Close details"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-[11px] sm:text-xs md:text-sm font-medium opacity-80 mb-6 leading-relaxed">
                  {selectedBadge.details.description}
                </p>

                <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-40 mb-3">Key Highlights</h4>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {selectedBadge.details.achievements.map((ach, i) => (
                    <li key={i} className="text-[11px] sm:text-xs md:text-sm font-medium flex gap-3">
                      <span className="opacity-30 shrink-0">—</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {selectedBadge.details.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 sm:px-3 sm:py-1 bg-[#f5f5f5] text-[7px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full border border-black/5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
