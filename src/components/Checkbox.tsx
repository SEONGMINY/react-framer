import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Checkbox = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ani = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(ani);
    };
  }, []);

  return (
    <motion.svg
      width="90"
      height="90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: 1000 }}
      animate={isVisible ? "active" : "inActive"}
      variants={svgVariant}
      transition={{
        type: "spring",
        damping: 13,
        stiffness: 100,
      }}
    >
      <motion.circle
        fill="#007AFF"
        opacity="0.75"
        cx="45"
        cy="45"
        r="45"
        // initial={circleInit}
        // animate={circleAnimate}
        // transition={circleTransition}
      />
      <motion.path
        d="M29.6 44.5L39.6 54L60.6 35"
        stroke="white"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={checkboxInit}
        animate={checkboxAnimate}
        transition={checkboxTransition}
      />
    </motion.svg>
  );
};

const svgVariant = {
  active: {
    y: 0,
  },
  inActive: {
    y: 1000,
  },
};

const circleInit = {
  scale: 0,
};

const circleAnimate = {
  scale: 1,
};

const circleTransition = {
  duration: 1.2,
  delay: 1,
  ease: [0, 0.71, 0.2, 1.01],
};

const checkboxInit = {
  opacity: 0,
  pathLength: 0,
};

const checkboxAnimate = {
  opacity: 1,
  pathLength: 1,
};

const checkboxTransition = {
  delay: 0.7,
  duration: 0.3,
};

export default Checkbox;
