import { PropsWithChildren } from "react";

export function TableRow({ children }: PropsWithChildren) {
  return (
    <tr className="h-10 border-b-[1px] border-gray-100 transition-colors last-of-type:border-none hover:bg-gray-50">
      {children}
    </tr>
  );
}
