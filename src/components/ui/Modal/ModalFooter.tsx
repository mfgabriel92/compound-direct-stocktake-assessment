import { PropsWithChildren } from "react";

export function ModalFooter({ children }: PropsWithChildren) {
  return (
    <div className="mt-4 flex items-end justify-between px-5">{children}</div>
  );
}
