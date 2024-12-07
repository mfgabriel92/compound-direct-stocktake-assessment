import { GrClose } from "react-icons/gr";
import { useModal } from "../../../contexts";
import { Modal } from "./";

export function PerformStockTakeModal() {
  const { toggle } = useModal();

  return (
    <Modal>
      <div className="flex items-center justify-between border-b-[1px] border-gray-200/50 px-4 pb-3">
        <h3 className="text-2xl">Perform Stocktake</h3>
        <GrClose
          size={18}
          className="cursor-pointer transition-colors hover:text-black"
          onClick={toggle}
        />
      </div>

      <div className="border-b-[1px] border-gray-200/50 px-4 py-5">
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
          <div className="flex h-14 w-full gap-4 rounded-md text-black">
            <select className="h-[72px] basis-1/3 rounded-md border-[1px] border-gray-200/50 leading-none">
              <option value="1">+1</option>
              <option value="5">+5</option>
              <option value="10">+10</option>
              <option value="100">+100</option>
              <option value="1000">+1000</option>
            </select>
            <button className="flex h-[72px] w-full flex-1 items-center justify-center rounded-md border-[1px] border-blue-500 text-blue-500 transition-colors hover:bg-blue-500 hover:text-white">
              <span className="mt-1">Count</span>
            </button>
          </div>
        </div>

        <div className="mt-8 self-start text-sm text-gray-500/70">
          <strong>Next:</strong> Blue/White Neo Capsule
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between px-5">
        <label htmlFor="skip" className="cursor-pointer">
          <input id="skip" type="checkbox" />
          <span className="ml-2">Skip stocktake for this item</span>
        </label>
        <button className="flex rounded-lg bg-blue-500 px-3 py-2 text-lg font-thin text-white">
          <span className="mt-1">Save & Next</span>
        </button>
      </div>
    </Modal>
  );
}
