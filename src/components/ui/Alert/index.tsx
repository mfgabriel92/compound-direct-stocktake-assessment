import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  variant: "success" | "warning" | "neutral";
}

export function Alert({ variant, children }: Props) {
  return (
    <div
      className={clsx("mb-4 w-full rounded-lg border-l-8 p-4 text-sm", {
        "border-green-700 bg-green-200 text-green-700": variant === "success",
        "border-brown-700/25 bg-brown-200 text-brown-700 border-2 border-l-2":
          variant === "warning",
        "border-gray-200 bg-gray-200 text-gray-700": variant === "neutral",
      })}
    >
      {children}
    </div>
  );
}
