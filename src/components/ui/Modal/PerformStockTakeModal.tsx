import { Button } from "../Button";
import { CountedListCountValuesSelect } from "../CountedListCountValuesSelect.tsx";
import { Modal, ModalTitle, ModalContent, ModalFooter } from "./";

export function PerformStockTakeModal() {
  return (
    <Modal>
      <ModalTitle>Perform Stocktake</ModalTitle>

      <ModalContent>
        <p className="w-full border-b-[1px] border-gray-200/50 pb-3">
          Blue/White Neo Capsule 1
        </p>
        <div className="mt-4 flex w-full justify-center gap-4 text-black">
          <div className="flex flex-1 flex-col items-center gap-2">
            <input
              type="number"
              className="h-[72px] w-full rounded-md border-[1px] border-gray-200/50 text-center text-4xl leading-none"
            />
            <span className="text-xs">CURRENT</span>
          </div>
          <div className="from-wite flex flex-1 flex-col items-center gap-2">
            <input
              type="number"
              className="h-[72px] w-full rounded-md border-[1px] border-gray-200/50 bg-gradient-to-b from-white to-orange-700/20 text-center text-4xl leading-none"
            />
            <span className="text-xs">COUNT</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center border-[1px] border-dashed border-gray-200/50 p-4 py-12">
          <div className="flex h-[72px] w-full gap-4 rounded-md text-black">
            <CountedListCountValuesSelect />
            <Button className="w-full" type="outline">
              Count
            </Button>
          </div>
        </div>

        <div className="mt-8 self-start text-sm text-gray-500/70">
          <strong>Next:</strong> Blue/White Neo Capsule
        </div>
      </ModalContent>

      <ModalFooter>
        <label htmlFor="skip" className="cursor-pointer">
          <input id="skip" type="checkbox" />
          <span className="ml-2">Skip stocktake for this item</span>
        </label>
        <Button>Save & Next</Button>
      </ModalFooter>
    </Modal>
  );
}
