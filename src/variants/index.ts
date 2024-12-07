export const modalOverlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const modalVariants = {
  hidden: {
    y: "20px",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-20px",
    opacity: 0,
  },
};

export const selectInputVariants = {
  hidden: {
    y: 0,
    display: "none",
    opacity: 0,
  },
  visible: {
    y: 5,
    display: "flex",
    opacity: 1,
  },
  exit: {
    y: 0,
    display: "none",
    opacity: 0,
  },
};
