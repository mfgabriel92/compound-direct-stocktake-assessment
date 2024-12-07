import { PropsWithChildren } from "react";
import { GrClose } from "react-icons/gr";
import { useModal } from "../../../contexts";

export function ModalTitle({ children }: PropsWithChildren) {
  const { toggle } = useModal();

  return (
    <div className="flex items-center justify-between border-b-[1px] border-gray-200/50 px-4 pb-3">
      <h3 className="text-2xl">{children}</h3>
      <GrClose
        size={18}
        className="cursor-pointer transition-colors hover:text-black"
        onClick={toggle}
      />
    </div>
  );
}
