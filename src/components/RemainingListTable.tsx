import { HTMLAttributes, useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { useModal } from "../contexts";
import { StocktakeModel } from "../models";
import { renderUnitOrUnitsText } from "../utils";
import { Table, EmptyTable, TableRow } from "./ui";

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
    const list = stocktakes.list.filter((i) => i.count !== 0);
    setRemainingList(list);
  }, [stocktakes.list]);

  function handleToggleOpen(item: StocktakeModel) {
    toggleOpenClose();
    setData(item);
  }

  function renderTableRows() {
    return remainingList.map((remainingItem) => (
      <tr
        key={remainingItem.id}
        className="h-10 transition-colors hover:bg-gray-50"
      >
        <TableRow className="w-[400px] text-blue-500">
          {remainingItem.stockName}
        </TableRow>
        <TableRow>{renderUnitOrUnitsText(remainingItem.currentQty)}</TableRow>
        <TableRow>
          <ActionButton onClick={() => handleToggleOpen(remainingItem)} />
        </TableRow>
      </tr>
    ));
  }

  function renderTableBody() {
    if (!remainingList.length) {
      return (
        <tbody>
          <EmptyTable />
        </tbody>
      );
    }

    return <tbody>{renderTableRows()}</tbody>;
  }

  return (
    <Table
      title="Remaining"
      header={header}
      isLoading={stocktakes.isLoading}
      className="mt-12"
    >
      {renderTableBody()}
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
