import "../styles/dragModalStyles.css";
import { motion, PanInfo, Variants } from "framer-motion";
import { useState } from "react";

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants: Variants = {
  hidden: { y: 1000 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
    },
  },
};

const DragModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onOpen = () => {
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.y > 200) {
      onClose();
    }
  };

  if (!isVisible) {
    return <button onClick={onOpen}>onOpen</button>;
  }

  return (
    <>
      <motion.div
        className="overlay"
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
        variants={overlayVariants}
      />
      <motion.div
        className="modal-panel"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={panelVariants}
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
      >
        <div className="modal-head" />
        <motion.div
          className="modal-body"
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          dragElastic={0}
        />
      </motion.div>
    </>
  );
};

export default DragModal;
