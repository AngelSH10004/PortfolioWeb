import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import StyleVectorial from "@/components/ui/background/style_vectorial";
import AnimationText from "@/components/ui/text/animationtext";
import Buttonback from "../buttonback";

export default function ContentProyect({
  title,
  description,
  mainImage,
  footerText,
  footerLink,
  OpenPage,
  ClosePage,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!OpenPage) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        ClosePage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [OpenPage, ClosePage]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {OpenPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-100 overflow-y-auto overflow-x-hidden bg-[#4A1F24] text-white"
        >
          {/* background */}
          <div className="pointer-events-none fixed inset-0">
            <StyleVectorial />
          </div>

          {/* inner wrapper aligning with background max-w-7xl */}
          <div className="relative z-10 min-h-full w-full max-w-7xl mx-auto flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 gap-8">
            {/* header */}
            <header className="flex items-center justify-between w-full">
              <Buttonback Action={ClosePage} />
            </header>

            {/* information */}
            <main className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 my-auto py-4 sm:py-8">
              <section className="flex flex-col justify-center min-w-0">
                <h2 className="font-shoulders text-5xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[100px] font-black leading-[0.9] tracking-tight uppercase wrap-break-word">
                  {title}
                </h2>

                {description && (
                  <p className="mt-6 max-w-xl font-serif text-base sm:text-lg md:text-xl font-medium text-white/90 leading-relaxed text-pretty">
                    {description}
                  </p>
                )}
              </section>

              {/* image */}
              <div className="w-full flex items-center justify-center min-w-0">
                {mainImage ? (
                  <div className="w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/20">
                    <img
                      decoding="async"
                      src={mainImage}
                      alt={title || "Imagen del proyecto"}
                      className="w-full h-64 sm:h-80 md:h-90 lg:h-105 object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div className="w-full h-64 sm:h-80 md:h-90 lg:h-105 rounded-2xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center text-white/50 p-6 text-center">
                    <span className="font-shoulders text-3xl md:text-4xl tracking-wider text-white/70">
                      COMING SOON
                    </span>
                    <p className="mt-2 text-sm font-serif text-white/40">
                      Project under development
                    </p>
                  </div>
                )}
              </div>
            </main>

            {/* footer */}
            <footer className="w-full pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 font-serif">
                <p className="text-sm sm:text-base md:text-lg font-bold text-white/80 tracking-wide uppercase wrap-break-word">
                  {footerText}
                </p>

                {footerLink && (
                  <div className="shrink-0">
                    <AnimationText
                      text="SEE PROJECT"
                      color="#E1D8D1"
                      size="text-xl sm:text-2xl"
                      link={footerLink}
                      svg={
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="5" y1="19" x2="19" y2="5" />
                          <polyline points="19 9 19 5 15 5" />
                        </svg>
                      }
                    />
                  </div>
                )}
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
