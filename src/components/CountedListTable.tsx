import { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { StocktakeModel } from "../models";
import { renderUnitOrUnitsText } from "../utils";
import { CountedListStatusIcon } from "./CountedListStatusIcon.tsx";
import { TableRow, Table } from "./ui";

interface CountedListTableProps {
  stocktakes: {
    list: StocktakeModel[];
    isLoading: boolean;
  };
}

function CountedListTable({ stocktakes }: CountedListTableProps) {
  const [countedList, setCountedList] = useState<StocktakeModel[]>([]);

  const header = [
    "stock name",
    "previous qty",
    "count",
    "movement",
    "status",
    "",
  ];

  useEffect(() => {
    const list = stocktakes.list.filter((i) => i.dateSkipped!);
    setCountedList(list);
  }, [stocktakes.list]);

  function renderTableRows() {
    return countedList.map((countedItem) => (
      <tr
        key={countedItem.stocktakeItemId}
        className="h-11 transition-colors hover:bg-gray-50"
      >
        <TableRow className="w-[400px] text-blue-500">
          {countedItem.name}
        </TableRow>
        <TableRow>{renderUnitOrUnitsText(countedItem.priorQuantity)}</TableRow>
        <TableRow>{renderUnitOrUnitsText(countedItem.countValue)}</TableRow>
        <TableRow>{renderUnitOrUnitsText(countedItem.movement!)}</TableRow>
        <TableRow>{<CountedListStatusIcon record={countedItem} />}</TableRow>
        <td className="flex h-11 items-center justify-end">
          <HiDotsVertical className="cursor-pointer hover:text-gray-900" />
        </td>
      </tr>
    ));
  }

  return (
    <Table
      title="Counted"
      header={header}
      isLoading={stocktakes.isLoading}
      isEmpty={countedList.length === 0}
      className="mt-10"
    >
      {renderTableRows()}
    </Table>
  );
}

export { CountedListTable };
