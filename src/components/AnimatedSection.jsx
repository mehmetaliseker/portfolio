import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeVariants = {
  top: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  bottom: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

function AnimatedSection ({ children, direction = "bottom", delay = 0 })  {
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeVariants[direction]}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;