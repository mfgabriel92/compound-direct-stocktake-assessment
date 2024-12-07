import { PropsWithChildren } from "react";

export function ModalContent({ children }: PropsWithChildren) {
  return (
    <div className="border-b-[1px] border-gray-200/50 px-4 py-5">
      {children}
    </div>
  );
}
