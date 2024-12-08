import { HTMLAttributes, useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { useModal } from "../contexts";
import { ModalType } from "../enums";
import { StocktakeModel } from "../models";
import { renderUnitOrUnitsText } from "../utils";
import { Table, TableRow } from "./ui";

interface RemainingListTableProps {
  stocktakes: {
    list: StocktakeModel[];
    isLoading: boolean;
  };
}

export function RemainingListTable({ stocktakes }: RemainingListTableProps) {
  const { toggleOpenClose, setData } = useModal();
  const [remainingList, setRemainingList] = useState<StocktakeModel[]>([]);

  const header = ["Stock Name", "Current Qty", ""];

  useEffect(() => {
    const list = stocktakes.list.filter((i) => i.dateSkipped! === null);
    setRemainingList(list);
  }, [stocktakes.list]);

  function handleToggleOpen(item: StocktakeModel) {
    toggleOpenClose(ModalType.RecordCount);
    setData(item);
  }

  function renderTableRows() {
    return remainingList.map((remainingItem) => (
      <TableRow key={remainingItem.stocktakeItemId}>
        <td className="w-[400px] text-blue-500">{remainingItem.name}</td>
        <td>{renderUnitOrUnitsText(remainingItem.currentQuantity)}</td>
        <td>
          <ActionButton onClick={() => handleToggleOpen(remainingItem)} />
        </td>
      </TableRow>
    ));
  }

  return (
    <Table
      title="Remaining"
      header={header}
      isLoading={stocktakes.isLoading}
      isEmpty={!remainingList || remainingList.length === 0}
      className="mt-12"
    >
      <tbody>{renderTableRows()}</tbody>
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
