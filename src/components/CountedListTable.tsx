import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useStocktake, useModal } from "../contexts";
import { ModalType } from "../enums";
import { StocktakeModel } from "../models";
import { renderUnitOrUnitsText } from "../utils";
import { CountedListStatusIcon } from "./CountedListStatusIcon.tsx";
import { FloatingContainer } from "./ui/FloatingContainer";
import { Option } from "./ui/Input";
import { Table, TableRow, TableBody } from "./ui/Table";

export function CountedListTable() {
  const { countedStocktakeItems } = useStocktake();
  const { toggleOpenClose, setModalData } = useModal();

  const header = [
    "stock name",
    "previous qty",
    "count",
    "movement",
    "status",
    "",
  ];

  function openAndPopulateModal(item: StocktakeModel) {
    toggleOpenClose(ModalType.RecordCount);
    setModalData(item);
  }

  function renderTableRows() {
    return countedStocktakeItems.list.map((countedItem) => (
      <TableRow key={countedItem.stocktakeItemId}>
        <td className="text-blue-500">{countedItem.name}</td>
        <td>{renderUnitOrUnitsText(countedItem.priorQuantity)}</td>
        <td>{renderUnitOrUnitsText(countedItem.countValue)}</td>
        <td>{renderUnitOrUnitsText(countedItem.movement!)}</td>
        <td>{<CountedListStatusIcon stocktakeItem={countedItem} />}</td>
        <td className="relative flex h-11 items-center justify-end">
          <ActionButton onClick={() => openAndPopulateModal(countedItem)} />
        </td>
      </TableRow>
    ));
  }

  return (
    <Table
      title="Counted"
      header={header}
      isLoading={countedStocktakeItems.isLoading}
      isEmpty={countedStocktakeItems.list.length === 0}
      className="mt-10"
    >
      <TableBody>{renderTableRows()}</TableBody>
    </Table>
  );
}

function ActionButton({ onClick }: { onClick: () => void }) {
  const [isMoreOptionsMenuOpen, setIsMoreOptionsMenuOpen] = useState(false);

  function toggleMoreOptionsMenuOpenClose() {
    setIsMoreOptionsMenuOpen(!isMoreOptionsMenuOpen);
  }

  function handleOptionClick() {
    onClick();
    toggleMoreOptionsMenuOpenClose();
  }

  return (
    <>
      <HiDotsVertical
        className="text-xs! h-full cursor-pointer rounded-md py-3 transition-colors hover:bg-blue-300 hover:text-white"
        onClick={toggleMoreOptionsMenuOpenClose}
      />
      <FloatingContainer
        isOpen={isMoreOptionsMenuOpen}
        className="right-[3px] top-[30px] [&>p]:whitespace-nowrap [&>p]:pl-6 [&>p]:pr-14"
      >
        <Option onClick={handleOptionClick}>Redo Stocktake</Option>
      </FloatingContainer>
    </>
  );
}
