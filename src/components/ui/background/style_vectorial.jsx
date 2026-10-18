export default function StyleVectorial() {
  return (
    <>
      {/* Style Vectorial Horizontal*/}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "100% 220px",
        }}
      />

      {/* Style Vectorial */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto flex justify-between px-10">
        <div className="w-px h-full bg-white/5 relative">
          <span className="absolute top-2 -left-1 text-white/20 text-[10px] select-none font-mono">
            +
          </span>
          <span className="absolute bottom-2 -left-1 text-white/20 text-[10px] select-none font-mono">
            +
          </span>
        </div>
        <div className="w-px h-full bg-white/5 hidden md:block relative">
          <span className="absolute top-2 -left-1 text-white/20 text-[10px] select-none font-mono">
            +
          </span>
          <span className="absolute bottom-2 -left-1 text-white/20 text-[10px] select-none font-mono">
            +
          </span>
        </div>
        <div className="w-px h-full bg-white/5 relative">
          <span className="absolute top-2 -left-1 text-white/20 text-[10px] select-none font-mono">
            +
          </span>
          <span className="absolute bottom-2 -left-1 text-white/20 text-[10px] select-none font-mono">
            +
          </span>
        </div>
      </div>
    </>
  );
}
