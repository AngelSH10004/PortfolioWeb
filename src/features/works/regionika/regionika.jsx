import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StyleVectorial from "../../../components/ui/background/style_vectorial";
import ContentRegio from "../../../assets/images/project-1/portada1.jpg";
import ContentRegio2 from "../../../assets/images/project-1/content2.png";
import AnimationText from "../../../components/ui/text/animationtext";
import Buttonback from "../../works/components/buttonback";

export default function Regionika() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    return () => (document.body.style.overflow = "unset");
  }, [loading]);

  const OpenPage = () => {
    setLoading(true);
  };

  const ClosePage = () => {
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={OpenPage}
        className="rounded bg-[#52272A] px-4 py-2 font-bold text-[#F5F0E8]"
      >
        Activar Preloader
      </button>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col pt-35 items-center gap-4 bg-[#4A1F24] text-[#F5F0E8] overflow-y-auto px-30 pb-5"
          >
            <Buttonback Action={ClosePage} />
            <StyleVectorial />
            <h2 className="font-shoulders text-6xl font-black md:text-[300px]">
              REGIONIKA
            </h2>
            <div className="flex gap-7 mt-10  items-center">
              <div className="w-1/2 font-medium font-serif text-[20px] text-balance flex items-center">
                <p>
                  Regionika is an academic research and extension initiative by
                  the University of Guadalajara (CUAltos), dedicated to driving
                  economic and social development across the Los Altos de
                  Jalisco region.
                  <br />
                  <br />
                  Designed as a modern digital repository and news platform, the
                  portal seamlessly connects university researchers, local
                  businesses, and government bodies through accessible
                  scientific publications, educational resources, and community
                  outreach. Built with performance and accessibility at its core
                  using Astro, Regionika turns complex academic research into an
                  engaging, fast, and intuitive digital experience for the
                  entire community.
                </p>
              </div>
              <div className="w-1/2 ">
                <img
                  src={ContentRegio}
                  alt="Academic University"
                  className="rounded-xl object-cover "
                />
              </div>
            </div>
            <div className="pt-20">
              <img
                src={ContentRegio2}
                alt="Page"
                className="rounded-xl object-cover "
              />
            </div>
            <div className="mt-8 h-px w-full shrink-0 bg-[#ffffff] opacity-30" />
            <div className="flex justify-between items-center w-full px-3  font-serif text-[14px] font-black">
              <p>REGIONIKA - PAGEWORK</p>
              <AnimationText
                text="SEE PROJECT"
                color="#E1D8D1"
                size="text-2xl"
                link="http://regionika.cualtos.udg.mx/"
                svg={
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="icon flat-line"
                  >
                    <line x1="5" y1="19" x2="19" y2="5" />
                    <polyline points="19 9 19 5 15 5" />
                  </svg>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
