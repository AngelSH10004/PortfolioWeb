import { useState } from "react";
import { motion } from "motion/react";

export default function CursorImage({ src, alt = "Vista previa", children }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <motion.img
        src={src}
        alt={alt}
        fetchpriority="low"
        decoding="async"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 left-0 top-0 z-50 h-100 w-120 rounded-xl object-cover shadow-xl bg-[#2b1013]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          visible
            ? { opacity: 1, scale: 1, x: position.x, y: position.y }
            : { opacity: 0, scale: 0.8, x: position.x, y: position.y }
        }
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
          x: { duration: 0.08, ease: "linear" },
          y: { duration: 0.08, ease: "linear" },
        }}
      />
    </div>
  );
}
