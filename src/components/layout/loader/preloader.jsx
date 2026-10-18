import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-99 flex items-center justify-center
        bg-[#52272A] text-[#F5F0E8]
        transition-transform duration-1000 ease-in-out
        ${loading ? "translate-y-0" : "-translate-y-full"}`}
    >
      <h1 className="font-shoulders text-6xl font-black md:text-9xl">
        ANGEL SH
      </h1>
    </div>
  );
}
