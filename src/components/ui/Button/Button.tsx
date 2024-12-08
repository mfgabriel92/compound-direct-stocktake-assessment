import clsx from "clsx";
import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: "solid" | "outline" | "ghost";
  className?: string;
  children: ReactNode;
}

export function Button({
  type = "solid",
  children,
  className,
  onClick,
}: Props) {
  let typeClassName;

  switch (type) {
    case "solid":
      typeClassName = "bg-blue-500 text-white hover:bg-blue-500/70";
      break;
    case "outline":
      typeClassName =
        "border-[1px] border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white";
      break;
    case "ghost":
      typeClassName =
        "border-[1px] border-gray-500 text-gray-500  hover:bg-gray-100";
      break;
  }

  return (
    <button
      className={clsx(
        "text-md flex items-center justify-center rounded-md px-3 py-1 font-thin transition-colors",
        typeClassName,
        className,
      )}
      onClick={onClick}
    >
      <span className="mt-1">{children}</span>
    </button>
  );
}
