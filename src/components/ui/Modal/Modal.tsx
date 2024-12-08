import clsx from "clsx";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { modalVariants, modalOverlayVariants } from "../../../variants";

interface Props extends PropsWithChildren {
  className?: string;
}

export function Modal({ className, children }: Props) {
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
        className={clsx(
          "fixed z-20 w-1/4 overflow-visible rounded-lg bg-white py-5",
          className,
        )}
        style={{ boxShadow: "0 0 20px 20px rgba(0, 0, 0, 3%)" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
