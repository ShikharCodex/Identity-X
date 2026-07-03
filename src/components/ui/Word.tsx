"use client";

import React from 'react';
import { motion, useTransform, MotionValue } from "framer-motion";

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

export const Word = React.memo(({ word, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="mr-2 sm:mr-3 md:mr-4 lg:mr-5 mt-1 md:mt-2 relative">
      <span className="absolute text-white/15">{word}</span>
      <motion.span style={{ opacity }} className="text-white relative z-10">{word}</motion.span>
    </span>
  );
});

Word.displayName = 'Word';
