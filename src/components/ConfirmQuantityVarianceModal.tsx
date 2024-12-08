import { useModal } from "../contexts";
import { ModalType } from "../enums";
import { Button } from "./ui/Button";
import { Modal, ModalTitle, ModalContent, ModalFooter } from "./ui/Modal";

interface Props {
  onConfirm: () => void;
}

export function ConfirmQuantityVarianceModal({ onConfirm }: Props) {
  const { toggleOpenClose } = useModal();

  return (
    <Modal className="w-[23%]">
      <ModalTitle
        closeModal={() => toggleOpenClose(ModalType.ConfirmQuantityVariance)}
      >
        Quantity Variance
      </ModalTitle>
      <ModalContent>
        <p>
          Count does not match with stock on hand record. Do you still want to
          proceed?
        </p>
      </ModalContent>
      <ModalFooter>
        <div className="flex flex-1 justify-end gap-2">
          <Button
            type="ghost"
            onClick={() => toggleOpenClose(ModalType.ConfirmQuantityVariance)}
          >
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </div>
      </ModalFooter>
    </Modal>
  );
}
