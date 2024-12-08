import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useModal } from "../contexts";
import { ModalType } from "../enums";
import { StocktakeModel } from "../models";
import { stocktakesList } from "../stores";
import { ConfirmQuantityVarianceModal } from "./ConfirmQuantityVarianceModal.tsx";
import { Button } from "./ui/Button";
import { Select } from "./ui/Input";
import { Modal, ModalTitle, ModalContent, ModalFooter } from "./ui/Modal";

export function RecordCountModal() {
  const { isOpen, data, toggleOpenClose } = useModal();
  const [currentQuantity, setCurrentQty] = useState<number>(0);
  const [countValue, setCountValue] = useState<number>(0);
  const [incrementBy, setIncrementBy] = useState<number>(1);
  const [isSkipStockableChecked, setIsStockableChecked] = useState(false);

  const incrementByOptions = [1, 5, 10, 100, 1000];
  const stocktake = data as StocktakeModel;
  const isCountEqualCurrentQuantity = countValue === currentQuantity;

  useEffect(() => {
    setCurrentQty(stocktake.currentQuantity);
    setCountValue(stocktake.countValue);
  }, [stocktake.currentQuantity, stocktake.countValue]);

  function handleCountClick() {
    setCountValue((prev) => prev + incrementBy);
    setIncrementBy(1);
  }

  function handleSaveAndNextClick() {
    if (!isCountEqualCurrentQuantity) {
      toggleOpenClose(ModalType.ConfirmQuantityVariance);
      return;
    }

    updateStocktakeCount();
  }

  function updateStocktakeCount() {
    const body = {
      ...stocktake,
      countValue,
      priorQuantity: currentQuantity,
      movement: countValue - currentQuantity,
      modifiedDate: new Date(),
    } as StocktakeModel;
    stocktakesList.updateStocktakeCount(body);
    toggleOpenClose(ModalType.RecordCount);
  }

  function handleSkipStockableClick() {
    stocktakesList.updateStocktakeAsSkipped(stocktake);
    toggleOpenClose(ModalType.RecordCount);
  }

  function renderSaveOrSkipButton() {
    if (isSkipStockableChecked) {
      return <Button onClick={handleSkipStockableClick}>Skip Stockable</Button>;
    }

    return <Button onClick={handleSaveAndNextClick}>Save & Next</Button>;
  }

  return (
    <>
      <Modal>
        <ModalTitle closeModal={() => toggleOpenClose(ModalType.RecordCount)}>
          Perform Stocktake
        </ModalTitle>

        <ModalContent>
          <p className="w-full border-b-[1px] border-gray-200/50 pb-3">
            {stocktake.name}
          </p>
          <div className="mt-4 flex w-full justify-center gap-4 text-black">
            <div className="flex flex-1 flex-col items-center gap-2">
              <input
                value={currentQuantity}
                type="number"
                onChange={(e) => setCurrentQty(Number(e.target.value))}
                className="h-[72px] w-full rounded-md border-[1px] border-gray-200/50 text-center text-4xl leading-none"
              />
              <span className="text-xs">CURRENT</span>
            </div>
            <div className="from-wite flex flex-1 flex-col items-center gap-2">
              <input
                value={countValue}
                type="number"
                onChange={(e) => setCountValue(Number(e.target.value))}
                className={clsx(
                  "h-[72px] w-full rounded-md border-[1px] border-gray-200/50 bg-gradient-to-b from-white text-center text-4xl leading-none",
                  {
                    "to-orange-100/50": !isCountEqualCurrentQuantity,
                    "to-green-100/50": isCountEqualCurrentQuantity,
                  },
                )}
              />
              <span className="text-xs">COUNT</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center border-[1px] border-dashed border-gray-200/50 p-4 py-12">
            <div className="flex h-[72px] w-full gap-4 rounded-md text-black">
              <Select
                values={incrementByOptions}
                className="basis-[60%]"
                onChange={setIncrementBy}
              />
              <Button
                className="w-full"
                type="outline"
                onClick={handleCountClick}
              >
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
            <input
              id="skip"
              type="checkbox"
              checked={isSkipStockableChecked}
              onChange={() => setIsStockableChecked(!isSkipStockableChecked)}
            />
            <span className="ml-2">Skip stocktake for this item</span>
          </label>
          {renderSaveOrSkipButton()}
        </ModalFooter>
      </Modal>

      <AnimatePresence>
        {isOpen(ModalType.ConfirmQuantityVariance) && (
          <ConfirmQuantityVarianceModal onConfirm={updateStocktakeCount} />
        )}
      </AnimatePresence>
    </>
  );
}
