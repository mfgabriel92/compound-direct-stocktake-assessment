import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { tableRowVariants } from "../../../variants";

export function TableBody({ children }: PropsWithChildren) {
  return (
    <motion.tbody
      variants={tableRowVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.tbody>
  );
}
