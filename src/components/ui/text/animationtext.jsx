import { motion } from "motion/react";

export default function AnimationText({ text, color, className }) {
  return (
    <motion.p
      className={`relative inline-block px-4 py-2 cursor-pointer font-boldselect-none ${className}`}
      whileHover="hover"
      initial="rest"
    >
      {text}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
      >
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="8"
          stroke={color}
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 },
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.p>
  );
}
