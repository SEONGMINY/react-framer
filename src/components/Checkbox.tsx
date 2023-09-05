import { motion } from "framer-motion";

const Checkbox = () => {
  return (
    <motion.svg
      width="90"
      height="90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        damping: 10,
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
        stroke-width="4.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        initial={checkboxInit}
        animate={checkboxAnimate}
        transition={checkboxTransition}
      />
    </motion.svg>
  );
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
