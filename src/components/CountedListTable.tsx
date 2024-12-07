﻿import { Observer } from "mobx-react-lite";
import { useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Table } from ".";
import { countedList } from "../stores";
import { renderUnitOrUnitsText } from "../utils";
import { CountedListStatusIcon, TableRow } from "./ui";

function CountedListTable() {
  const header = [
    "stock name",
    "previous qty",
    "count",
    "movement",
    "status",
    "",
  ];

  useEffect(() => {
    countedList.getCountedList();
  }, []);

  function renderTableRows() {
    return countedList.list.map((countedItem) => (
      <tr
        key={countedItem.id}
        className="h-11 transition-colors hover:bg-gray-50"
      >
        <TableRow className="w-[400px]">
          <a href="#" className="text-blue-500">
            {countedItem.stockName}
          </a>
        </TableRow>
        <TableRow>{renderUnitOrUnitsText(countedItem.previousQty)}</TableRow>
        <TableRow>{renderUnitOrUnitsText(countedItem.count)}</TableRow>
        <TableRow>{renderUnitOrUnitsText(countedItem.movement)}</TableRow>
        <TableRow>{<CountedListStatusIcon record={countedItem} />}</TableRow>
        <td className="flex h-11 items-center justify-end">
          <HiDotsVertical className="cursor-pointer hover:text-gray-900" />
        </td>
      </tr>
    ));
  }

  return (
    <Observer>
      {() => (
        <Table
          title="Counted"
          header={header}
          isLoading={countedList.isLoading}
          className="mt-10"
        >
          {renderTableRows()}
        </Table>
      )}
    </Observer>
  );
}

export { CountedListTable };
