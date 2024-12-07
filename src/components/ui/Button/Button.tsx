import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  type?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
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
  }

  return (
    <button
      className={clsx(
        "flex items-center justify-center rounded-lg px-3 py-2 text-lg font-thin transition-colors",
        typeClassName,
        className,
      )}
      onClick={onClick}
    >
      <span className="mt-1">{children}</span>
    </button>
  );
}
