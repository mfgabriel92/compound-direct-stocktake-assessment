import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { toJS } from "mobx";
import { useState, useEffect } from "react";
import { useModal, useStocktake } from "../contexts";
import { ModalType } from "../enums";
import { StocktakeModel } from "../models";
import { showSuccessToast, showErrorToast } from "../utils";
import { ConfirmQuantityVarianceModal } from "./ConfirmQuantityVarianceModal.tsx";
import {
  NeutralAlert,
  WarningAlert,
  SuccessAlert,
} from "./CountedAlreadyCountedAlert.tsx";
import { Button } from "./ui/Button";
import { Select } from "./ui/Input";
import { Modal, ModalTitle, ModalContent, ModalFooter } from "./ui/Modal";

export function RecordCountModal() {
  const { isOpen, data, toggleOpenClose } = useModal();
  const [stocktakeItem, setStocktakeItem] = useState<StocktakeModel>(
    data as StocktakeModel,
  );
  const {
    remainingStocktakeItems,
    updateStocktakeAsSkipped,
    updateStocktakeItemCount,
  } = useStocktake();

  const [currentQuantity, setCurrentQuantity] = useState<number>(0);
  const [countValue, setCountValue] = useState<number>(0);
  const [incrementBy, setIncrementBy] = useState<number>(1);
  const [isSkipStockableChecked, setIsStockableChecked] = useState(false);

  const incrementByOptions = [1, 5, 10, 100, 1000];
  const isCountNotEqualToCurrentQuantity = countValue !== currentQuantity;

  useEffect(() => {
    setStocktakeItem(data as StocktakeModel);
  }, [data]);

  useEffect(() => {
    if (stocktakeItem.countValue) {
      return;
    }

    const { list } = remainingStocktakeItems;
    if (!list.length) {
      toggleOpenClose(ModalType.RecordCount);
      showSuccessToast("All remaining stocktake items have been counted");
      return;
    }
  }, [stocktakeItem, remainingStocktakeItems.list]);

  useEffect(() => {
    setCurrentQuantity(stocktakeItem.currentQuantity);
    setCountValue(stocktakeItem.countValue);
  }, [stocktakeItem]);

  function countStocktake() {
    setCountValue((prev) => prev + incrementBy);
  }

  function saveAndGetNextStocktake() {
    if (isCountNotEqualToCurrentQuantity) {
      toggleOpenClose(ModalType.ConfirmQuantityVariance);
      return;
    }

    updateAndFetchNextStocktakeItem();
  }

  function updateAndFetchNextStocktakeItem() {
    try {
      const updatedStocktakeItem: StocktakeModel = {
        ...stocktakeItem,
        countValue: countValue || 0,
        priorQuantity: currentQuantity,
        movement: countValue - currentQuantity,
        modifiedDate: new Date(),
      };

      updateStocktakeItemCount(updatedStocktakeItem);

      if (remainingStocktakeItems.error) {
        showErrorToast(remainingStocktakeItems.error.message);
      }

      showSuccessToast(`${stocktakeItem.name} successfully counted`);
      fetchNextStocktakeItem();
    } catch (error) {
      showErrorToast(
        (error as Error).message || "An unexpected error occurred",
      );
    }
  }

  function fetchNextStocktakeItem() {
    if (stocktakeItem.countValue) {
      toggleOpenClose(ModalType.RecordCount);
      return;
    }

    const { list } = remainingStocktakeItems;
    const currentIndex = list.findIndex(
      (item: StocktakeModel) =>
        item.stocktakeItemId === stocktakeItem.stocktakeItemId,
    );

    setCountValue(0);
    setStocktakeItem(list[currentIndex + 1] || list[0]);
  }

  function handleSkipStocktakeItem() {
    updateStocktakeAsSkipped(toJS(stocktakeItem));
    toggleOpenClose(ModalType.RecordCount);
  }

  function renderItemAlreadyCountedWarning() {
    const { countValue, dateSkipped, priorQuantity } = stocktakeItem;

    if (!countValue) {
      return null;
    }

    if (dateSkipped) {
      return <NeutralAlert />;
    }

    return countValue !== priorQuantity ? (
      <WarningAlert countValue={countValue} priorQuantity={priorQuantity} />
    ) : (
      <SuccessAlert countValue={countValue} priorQuantity={priorQuantity} />
    );
  }

  function renderSaveOrSkipButton() {
    return isSkipStockableChecked ? (
      <Button onClick={handleSkipStocktakeItem}>Skip Stockable</Button>
    ) : (
      <Button onClick={saveAndGetNextStocktake}>
        {stocktakeItem.countValue ? (
          <span>Save</span>
        ) : (
          <span>Save & Next</span>
        )}
      </Button>
    );
  }

  return (
    <>
      <Modal>
        <ModalTitle closeModal={() => toggleOpenClose(ModalType.RecordCount)}>
          Perform Stocktake
        </ModalTitle>

        <ModalContent>
          {renderItemAlreadyCountedWarning()}
          <p className="w-full border-b-[1px] border-gray-200/50 pb-3">
            {stocktakeItem.name}
          </p>
          <div className="mt-4 flex w-full justify-center gap-4 text-black">
            <div className="flex flex-1 flex-col items-center gap-2">
              <input
                value={currentQuantity}
                type="number"
                onChange={(e) => setCurrentQuantity(Number(e.target.value))}
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
                    "to-orange-100/50": isCountNotEqualToCurrentQuantity,
                    "to-green-100/50": !isCountNotEqualToCurrentQuantity,
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
                onClick={countStocktake}
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
          <ConfirmQuantityVarianceModal
            onConfirm={updateAndFetchNextStocktakeItem}
          />
        )}
      </AnimatePresence>
    </>
  );
}
