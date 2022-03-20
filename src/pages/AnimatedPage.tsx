import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

type animatedPageProps = {
  children: ReactNode;
};

const AnimatedPage = ({ children }: animatedPageProps) => {
  return (
    <motion.main
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.main>
  );
};

export default AnimatedPage;
