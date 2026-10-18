"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoopingWordsProps {
  words: string[];
  className?: string;
}

export function LoopingWords({ words, className }: LoopingWordsProps) {
  const controls = useAnimationControls();
  const wordsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [selectorWidth, setSelectorWidth] = useState(0);

  // Duplicate the words array to create a seamless infinite loop
  const duplicatedWords = [...words, ...words];
  const totalOriginal = words.length;


useEffect(() => {
  let index = 0;
  let cancelled = false;
  let timeout: ReturnType<typeof setTimeout>;

  const animateNext = async () => {
    if (cancelled) return;

    updateWidth((index % totalOriginal) + 1);

    await controls.start({
      y: `-${(index * 100) / duplicatedWords.length}%`,
      transition: {
        duration: 1.2,
        ease: [0.175, 0.885, 0.32, 1],
      },
    });

    if (cancelled) return;

    index++;

    if (index >= totalOriginal) {
      index = 0;
      controls.set({ y: "0%" });
    }

    timeout = setTimeout(animateNext, 1000);
  };

  controls.set({ y: "0%" });
  animateNext();

  return () => {
    cancelled = true;
    clearTimeout(timeout);
    controls.stop();
  };
}, [controls, totalOriginal, duplicatedWords.length]);


  const updateWidth = (index: number) => {
    const el = wordsRef.current[index];
    if (el) {
      setSelectorWidth(el.offsetWidth);
    }
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      
<div className="relative h-[2.7em] px-[0.2em] text-[11vw] md:text-[350px] leading-[0.9] font-bold uppercase whitespace-nowrap overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_15%,black_75%,transparent)]">
        
        {/* List of words */}
        <motion.ul
          className="flex flex-col items-center m-0 p-0 list-none"
          animate={controls}
          initial={{ y: "0%" }}
        >
          {duplicatedWords.map((word, i) => (
            <li
              key={i}
              ref={(el) => {
                wordsRef.current[i] = el;
              }}
              className=" tracking-tight"
            >
              <p className="m-0">{word}</p>
            </li>
          ))}
        </motion.ul>

        {/* Selector Edge Boxes */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[0.9em] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
          animate={{ width: selectorWidth }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-[0.125em] h-[0.125em] border-t-[0.035em] border-l-[0.035em] border-primarylw" />
          {/* Top Right */}
          <div className="absolute top-0 right-0 w-[0.125em] h-[0.125em] border-t-[0.035em] border-r-[0.035em] border-primarylw" />
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-[0.125em] h-[0.125em] border-b-[0.035em] border-l-[0.035em] border-primarylw" />
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-[0.125em] h-[0.125em] border-b-[0.035em] border-r-[0.035em] border-primarylw" />
        </motion.div>
      </div>
    </div>
  );
}
