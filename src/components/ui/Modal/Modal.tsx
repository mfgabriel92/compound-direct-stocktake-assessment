import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { modalVariants, modalOverlayVariants } from "../../../variants";

export function Modal({ children }: PropsWithChildren) {
  return (
    <motion.div
      variants={modalOverlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/30"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed z-20 w-1/4 overflow-y-auto rounded-lg bg-white py-5"
        style={{ boxShadow: "0 0 20px 20px rgba(0, 0, 0, 3%)" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
