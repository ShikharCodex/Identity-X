"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const paragraph = "Building with Code, Thinking through Chess, and discussing AI with my Dog. Sometimes I Like is Travelling & Eating, I don't know my Self. But I really know is \"Shikhar don't like Homo Sapiens\"";

export default function About() {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  const words = paragraph.split(" ");

  return (
    <section id="about" ref={container} className="relative h-[200vh] bg-black w-full">
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 max-w-[100rem] mx-auto w-full">
        <p className="text-[10px] sm:text-xs md:text-sm font-mono text-white/40 uppercase tracking-[0.3em] mb-6 md:mb-12">
          01 — What I Like?
        </p>

        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5vw] font-bold font-sans leading-[1.15] md:leading-[1.1] tracking-tighter flex flex-wrap">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);

            return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
          })}
        </h3>
      </div>
    </section>
  );
}

const Word = ({ word, progress, range }: { word: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="mr-2 sm:mr-3 md:mr-4 lg:mr-5 mt-1 md:mt-2 relative">
      <span className="absolute text-white/15">{word}</span>
      <motion.span style={{ opacity }} className="text-white relative z-10">{word}</motion.span>
    </span>
  );
}
