"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

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

import { Word } from "./ui/Word";
