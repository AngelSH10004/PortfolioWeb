import { useEffect, useRef, useState } from "react";

export default function InteractiveGrid() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [size, setSize] = useState({ cols: 1, rows: 1, width: 0, height: 0 });

  const cellSize = 32;
  const radius = 140;
  const strength = 18;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      setSize({ cols, rows, width, height });
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();

    setMouse({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: -1000, y: -1000 })}
      className="absolute inset-0 overflow-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size.cols}, 1fr)`,
        gridAutoRows: `${cellSize}px`,
        pointerEvents: "auto",
      }}
    >
      {Array.from({ length: size.cols * size.rows }, (_, index) => {
        const col = index % size.cols;
        const row = Math.floor(index / size.cols);

        const x = (col + 0.5) * (size.width / size.cols);
        const y = (row + 0.5) * cellSize;

        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const influence = Math.max(0, 1 - distance / radius);
        const displacement = influence * influence * strength;

        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * displacement;
        const moveY = Math.sin(angle) * displacement;

        return (
          <div
            key={index}
            className="border border-white/[0.07] rounded-[2px]"
            style={{
              transform: `translate(${moveX}px, ${moveY}px)`,
              transition: "transform 100ms ease-out",
              backgroundColor:
                influence > 0.1
                  ? `rgba(99, 102, 241, ${influence * 0.2})`
                  : "transparent",
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
}
