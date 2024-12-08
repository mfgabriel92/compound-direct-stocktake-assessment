import { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { StocktakeModel } from "../models";
import { renderUnitOrUnitsText } from "../utils";
import { CountedListStatusIcon } from "./CountedListStatusIcon.tsx";
import { Table, TableRow, TableBody } from "./ui";

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
      <TableRow>
        <td className="w-[400px] text-blue-500">{countedItem.name}</td>
        <td>{renderUnitOrUnitsText(countedItem.priorQuantity)}</td>
        <td>{renderUnitOrUnitsText(countedItem.countValue)}</td>
        <td>{renderUnitOrUnitsText(countedItem.movement!)}</td>
        <td>{<CountedListStatusIcon record={countedItem} />}</td>
        <td className="flex h-11 items-center justify-end">
          <HiDotsVertical className="cursor-pointer hover:text-gray-900" />
        </td>
      </TableRow>
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
      <TableBody>{renderTableRows()}</TableBody>
    </Table>
  );
}

export { CountedListTable };
