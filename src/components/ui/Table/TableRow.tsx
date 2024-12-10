import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { tableRowVariants } from "../../../variants";

export function TableRow({ children }: PropsWithChildren) {
  return (
    <motion.tr
      variants={tableRowVariants}
      className="h-10 border-b-[1px] border-gray-100 transition-colors last-of-type:border-none hover:bg-gray-50"
    >
      {children}
    </motion.tr>
  );
}
