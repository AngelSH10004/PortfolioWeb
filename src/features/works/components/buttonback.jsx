export default function Buttonback({ Action, className = "" }) {
  return (
    <button
      type="button"
      onClick={Action}
      aria-label="Volver"
      className={`h-11 w-11 md:h-12 md:w-12 rounded-full bg-[#52272A] border border-white/10
               text-[#F5F0E8] shadow-lg hover:bg-[#6b3337] hover:scale-105 active:scale-95 cursor-pointer transition-all
               flex items-center justify-center shrink-0 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-5 md:size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </button>
  );
}
