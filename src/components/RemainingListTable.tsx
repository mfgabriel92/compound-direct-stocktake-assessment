import { HTMLAttributes } from "react";
import { BiEdit } from "react-icons/bi";
import { useModal, useStocktake } from "../contexts";
import { ModalType } from "../enums";
import { StocktakeModel } from "../models";
import { renderUnitOrUnitsText } from "../utils";
import { Table, TableRow, TableBody } from "./ui/Table";

export function RemainingListTable() {
  const { toggleOpenClose, setModalData } = useModal();
  const { remainingStocktakeItems } = useStocktake();

  const { list: remainingItemsList, isLoading } = remainingStocktakeItems;
  const header = ["Stock Name", "Current Qty", ""];

  function openAndPopulateModal(item: StocktakeModel) {
    toggleOpenClose(ModalType.RecordCount);
    setStocktakeItemIndexAndModalData(item);
  }

  function setStocktakeItemIndexAndModalData(item: StocktakeModel) {
    const itemIndex = remainingItemsList.findIndex(
      (i) => i.stocktakeItemId === item.stocktakeItemId,
    );
    setModalData(remainingItemsList[itemIndex]);
  }

  function renderTableRows() {
    return remainingItemsList.map((remainingItem) => (
      <TableRow key={remainingItem.stocktakeItemId}>
        <td className="w-[400px] text-blue-500">{remainingItem.name}</td>
        <td>{renderUnitOrUnitsText(remainingItem.currentQuantity)}</td>
        <td>
          <ActionButton onClick={() => openAndPopulateModal(remainingItem)} />
        </td>
      </TableRow>
    ));
  }

  return (
    <Table
      title="Remaining"
      header={header}
      isLoading={isLoading}
      isEmpty={!remainingItemsList || remainingItemsList.length === 0}
      className="mt-12"
    >
      <TableBody>{renderTableRows()}</TableBody>
    </Table>
  );
}

function ActionButton({ onClick }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className="float-end flex h-11 cursor-pointer items-center justify-end gap-2 text-blue-500 hover:underline"
      onClick={onClick}
    >
      <BiEdit className="-mt-1" />
      Record Count
    </span>
  );
}
