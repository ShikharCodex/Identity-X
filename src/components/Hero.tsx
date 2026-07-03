"use client";

import { motion } from "framer-motion";

const MarqueeContent = () => (
  <>
    <span>Shikhar</span>
    <span className="opacity-50">✦</span>
    <span>Don&apos;t Like</span>
    <span className="opacity-50">✦</span>
    <span>Homo Sapiens</span>
    <span className="opacity-50">✦</span>
    <span>Shikhar</span>
    <span className="opacity-50">✦</span>
    <span>Don&apos;t Like</span>
    <span className="opacity-50">✦</span>
    <span>Homo Sapiens</span>
    <span className="opacity-50">✦</span>
  </>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-accent">
      {/* Film Grain Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.15] bg-noise mix-blend-screen" />

      {/* Top Marquee Tape */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotate: -2, scale: 1.1 }}
        animate={{ opacity: 1, y: 0, rotate: -2, scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute top-24 md:top-32 left-0 w-full overflow-hidden z-20 pointer-events-none bg-accent text-black py-3 md:py-4 shadow-xl"
      >
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
          <div className="flex gap-6 md:gap-12 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
            <MarqueeContent />
          </div>
          <div className="flex gap-6 md:gap-12 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap" aria-hidden="true">
            <MarqueeContent />
          </div>
        </div>
      </motion.div>

      {/* Massive Glowing Center Typography */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center select-none">
        <motion.h1
          initial={{ filter: "blur(20px)", scale: 1.1, opacity: 0 }}
          animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18vw] font-black tracking-tighter leading-[0.8] text-accent uppercase"
          style={{ textShadow: "0 0 40px rgba(255,0,0,0.4), 0 0 120px rgba(255,0,0,0.2)" }}
        >
          Shikhar.X
        </motion.h1>
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
          animate={{ filter: "blur(0px)", opacity: 0.8, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          className="mt-4 font-bold text-accent tracking-[0.5em] text-xs md:text-xl uppercase"
          style={{ textShadow: "0 0 10px rgba(255,0,0,0.5)" }}
        >
          I Like TON 618
        </motion.p>
      </div>

      {/* Bottom Marquee Tape (Reverse) */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 2, scale: 1.1 }}
        animate={{ opacity: 1, y: 0, rotate: 2, scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-12 md:bottom-20 left-0 w-full overflow-hidden z-20 pointer-events-none bg-accent text-black py-3 md:py-4 shadow-xl"
      >
        <div className="flex w-max animate-[marquee_30s_linear_infinite_reverse]">
          <div className="flex gap-6 md:gap-12 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
            <MarqueeContent />
          </div>
          <div className="flex gap-6 md:gap-12 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap" aria-hidden="true">
            <MarqueeContent />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
