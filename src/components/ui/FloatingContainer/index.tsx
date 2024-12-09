import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";
import { selectInputVariants } from "../../../variants";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  className?: string;
}

export function FloatingContainer({ isOpen, className, children }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={selectInputVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={clsx(
            "absolute z-10 flex w-full min-w-fit flex-col rounded-md border-[1px] border-gray-200/50 bg-white py-1 shadow-sm",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
