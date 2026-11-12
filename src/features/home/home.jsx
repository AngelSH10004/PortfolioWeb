import ScrollIcon from "../../components/ui/Scrollicon/scroll";
import { motion } from "framer-motion";

function Home({ textColor }) {
  return (
    <section className="min-h-[calc(100dvh-5rem)] flex flex-col justify-center md:justify-between px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:pb-12 gap-6 sm:gap-8 md:gap-0">
      <div className="flex flex-col justify-center items-center text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] xl:text-[200px] font-shoulders font-black mx-2 sm:mx-8 md:mx-20 my-2 sm:my-4 md:my-10 leading-none">
        <div className="mr-auto text-[#52272A] transition-transform duration-500 ease-out hover:scale-110">
          FRONT-END
        </div>
        <div
          className="ml-auto -mt-4 sm:-mt-10 md:-mt-20 text-transparent transition-transform duration-500 ease-out hover:scale-110 stroke-home"
        >
          DEVELOPER
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0 mt-4 sm:mt-6 md:mt-10">
        <motion.div
          style={{ color: textColor }}
          className="text-2xl sm:text-3xl md:text-[38px] lg:text-[45px] text-left leading-tight w-full md:w-1/2 italic font-serif font-semibold"
        >
          "Hi! I’m a Computer Engineering student focused on Frontend Web and
          Software Development."
        </motion.div>
        <div className="hidden md:flex flex-col items-center w-full md:w-1/2 gap-4">
          <ScrollIcon
            text={"SCROLL"}
            classNameText={"text-[#515151] text-[15px]"}
            classNameDiv={
              "h-40 w-0.5 bg-linear-to-b from-[#332313] to-[transparent]"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
