import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Option({ onClick, children }: Props) {
  return (
    <p
      className="cursor-pointer rounded-md p-3 transition-colors hover:bg-blue-500 hover:text-white"
      onClick={onClick}
    >
      {children}
    </p>
  );
}
