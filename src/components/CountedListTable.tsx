import { Observer } from "mobx-react-lite";
import { useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Table } from ".";
import { countedList } from "../stores";
import { renderUnitOrUnitsText } from "../utils";
import { CountedListStatusIcon, EmptyTable, TableRow } from "./ui";

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

  function renderListOrEmptyMessage() {
    const { list } = countedList;

    if (!list.length) {
      return (
        <tbody>
          <EmptyTable />
        </tbody>
      );
    }

    return (
      <tbody>
        {list.map((record) => (
          <tr
            key={record.id}
            className="h-11 transition-colors hover:bg-gray-50"
          >
            <TableRow className="w-[400px]">
              <a href="#" className="text-blue-500">
                {record.stockName}
              </a>
            </TableRow>
            <TableRow>{renderUnitOrUnitsText(record.previousQty)}</TableRow>
            <TableRow>{renderUnitOrUnitsText(record.count)}</TableRow>
            <TableRow>{renderUnitOrUnitsText(record.movement)}</TableRow>
            <TableRow>{<CountedListStatusIcon record={record} />}</TableRow>
            <td className="flex h-11 items-center justify-end">
              <HiDotsVertical className="cursor-pointer hover:text-gray-900" />
            </td>
          </tr>
        ))}
      </tbody>
    );
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
          {renderListOrEmptyMessage()}
        </Table>
      )}
    </Observer>
  );
}

export { CountedListTable };
