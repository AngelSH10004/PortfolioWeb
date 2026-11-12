import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "../components/layout/header/nav";
import Home from "../features/home/home";
import Preloader from "../components/layout/loader/preloader";
import Content from "./content";
import Footer from "../components/layout/footer";
import StyleVectorial from "../components/ui/background/style_vectorial";
import CustomCursor from "../components/ui/cursor/CustomCursor";

function Main() {
  const contentRef = useRef(null);

  /*############################################################################*/
  /*Part of Home*/
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start 65%", "start 20%"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const textColorHome = useTransform(
    scrollYProgress,
    [0, 1],
    ["#6E473D", "#E1D8D1"],
  );

  /*############################################################################*/
  /*Part of Nav*/
  const textNavColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#3F1E20", "#E1D8D1"],
  );

  const borderColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#332313", "#E1D8D1"],
  );
  /*############################################################################*/

  return (
    <div className="relative min-h-screen w-full overflow-x-clip">
      <CustomCursor />

      {/*Dynamic bg Div*/}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="fixed inset-0 bg-[#4A1F24] pointer-events-none z-0"
      />

      {/*Bg Vectorial*/}
      <StyleVectorial />

      <div className="relative z-10 w-full overflow-x-clip">
        <Preloader />
        <Nav textColor={textNavColor} borderColor={borderColor} />
        <Home textColor={textColorHome} />
        <div ref={contentRef} className="w-full">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
