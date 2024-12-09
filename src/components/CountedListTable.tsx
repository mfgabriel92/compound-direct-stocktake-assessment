import { HiDotsVertical } from "react-icons/hi";
import { useStocktake } from "../contexts";
import { renderUnitOrUnitsText } from "../utils";
import { CountedListStatusIcon } from "./CountedListStatusIcon.tsx";
import { Table, TableRow, TableBody } from "./ui/Table";

function CountedListTable() {
  const { countedStocktakeItems } = useStocktake();

  const header = [
    "stock name",
    "previous qty",
    "count",
    "movement",
    "status",
    "",
  ];

  function renderTableRows() {
    return countedStocktakeItems.list.map((countedItem) => (
      <TableRow key={countedItem.stocktakeItemId}>
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
      isLoading={countedStocktakeItems.isLoading}
      isEmpty={countedStocktakeItems.list.length === 0}
      className="mt-10"
    >
      <TableBody>{renderTableRows()}</TableBody>
    </Table>
  );
}

export { CountedListTable };
