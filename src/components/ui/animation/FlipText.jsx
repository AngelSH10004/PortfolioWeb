import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function FlipLink({ children, className = "" }) {
  return (
    <span
      className={`inline-block whitespace-nowrap ${className}`}
      style={{ lineHeight: 0.85 }}
    >
      {children.split("").map((letter, i) => (
        <span key={i} className="relative inline-block overflow-hidden">
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>

          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="absolute inset-0 inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
