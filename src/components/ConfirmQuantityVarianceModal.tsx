import { useModal } from "../contexts";
import { ModalType } from "../enums";
import { Button } from "./ui/Button";
import { Modal, ModalTitle, ModalContent, ModalFooter } from "./ui/Modal";

interface Props {
  onConfirm: () => void;
}

export function ConfirmQuantityVarianceModal({ onConfirm }: Props) {
  const { toggleOpenClose } = useModal();

  function toggleModal() {
    toggleOpenClose(ModalType.ConfirmQuantityVariance);
  }

  function handleOnConfirmClick() {
    onConfirm();
    toggleModal();
  }

  return (
    <Modal className="w-[23%]">
      <ModalTitle closeModal={toggleModal}>Quantity Variance</ModalTitle>
      <ModalContent>
        <p>
          Count does not match with stock on hand record. Do you still want to
          proceed?
        </p>
      </ModalContent>
      <ModalFooter>
        <div className="flex flex-1 justify-end gap-2">
          <Button type="ghost" onClick={toggleModal}>
            Cancel
          </Button>
          <Button onClick={handleOnConfirmClick}>Confirm</Button>
        </div>
      </ModalFooter>
    </Modal>
  );
}
