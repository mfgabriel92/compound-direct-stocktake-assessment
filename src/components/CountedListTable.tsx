import { Observer } from "mobx-react-lite";
import { useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Table } from ".";
import { countedList, remainingList } from "../stores";
import { renderUnitOrUnitsText } from "../utils";
import { CountedListStatusIcon } from "./ui";

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

  function renderList() {
    return (
      <tbody>
        {countedList.list.map((record) => (
          <tr
            key={record.id}
            className="h-12 transition-colors hover:bg-gray-50"
          >
            <td className="w-[400px]">
              <a href="#" className="text-blue-500">
                {record.stockName}
              </a>
            </td>
            <td>{renderUnitOrUnitsText(record.previousQty)}</td>
            <td>{renderUnitOrUnitsText(record.count)}</td>
            <td>{renderUnitOrUnitsText(record.movement)}</td>
            <td>{<CountedListStatusIcon record={record} />}</td>
            <td className="flex h-12 items-center justify-end">
              <HiDotsVertical className="cursor-pointer text-gray-500 hover:text-gray-900" />
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
          isLoading={remainingList.isLoading}
          className="mt-12"
        >
          {renderList()}
        </Table>
      )}
    </Observer>
  );
}

export { CountedListTable };
