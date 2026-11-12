import { motion, Variants } from "framer-motion";

// Contaider Father delay
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, //default delay to childrens automatically
    },
  },
};

// Dictionary Animations
const animationPresets = {

    //Animation tipo resorte de abajo a arriba
  springUp: {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    show: {
      opacity: 1,
      y: 0, 
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 13,
        mass: 0.8,
      },
    },
  },

  //Animation tipo cortina de abajo a arriba
  clipReveal: {
    hidden: { clipPath: "inset(100% 0% 0% 0%)" },
    show: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.7, ease: [0.17, 0.55, 0.55, 1] },
    },
  },

  //animation tipo reposrte de izquierda a derecha
  springRight: {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    show: {
      opacity: 1,
      x: 0, 
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 13,
        mass: 0.8,
      },
    },
  },

  //Animation tipo reposrte de derecha a izquierda
  springLeft: {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    show: {
      opacity: 1,
      x: 0, 
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 13,
        mass: 0.8,
      },
    },
  },

} as const;

export type AnimationPreset = keyof typeof animationPresets;


// Individual Animation Default
export const ScrollReveal = ({ 
  children,
  animation = "springUp",
  className
}: {children: React.ReactNode, animation?: AnimationPreset, className?: string}) => {
  return (
    <motion.div variants={animationPresets[animation]} className={className}>
      {children}
    </motion.div>
  );
};

// Container Stagger Delay
ScrollReveal.Container = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{amount: 0.3, margin: "-50px", once: true
      }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

