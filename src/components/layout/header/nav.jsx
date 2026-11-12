import { motion } from "framer-motion";

function Nav({ textColor, borderColor }) {
  return (
    <motion.div className="pt-4 sm:pt-6 px-4 sm:px-8 md:px-10 h-16 sm:h-17.5 sticky top-0 z-50 backdrop-filter backdrop-blur-lg">
      <motion.nav
        style={{ color: textColor, borderColor: borderColor }}
        className="flex justify-between items-center h-full border-b-2 font-serif text-xs sm:text-base md:text-lg pb-3 gap-4"
      >
        <div className="shrink-0">ANGEL SH</div>
        <div className="font-black text-right">UX/UI FRONT-END DEVELOPER</div>
      </motion.nav>
    </motion.div>
  );
}

export default Nav;
