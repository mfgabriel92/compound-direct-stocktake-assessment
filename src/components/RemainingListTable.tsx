import { Observer } from "mobx-react-lite";
import { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { Table } from ".";
import { useModal } from "../contexts";
import { remainingList } from "../stores";
import { renderUnitOrUnitsText } from "../utils";
import { EmptyTable, TableRow } from "./ui";

export function RemainingListTable() {
  const { toggle } = useModal();

  const header = ["stock name", "current qty", ""];

  useEffect(() => {
    remainingList.getRemainingList();
  }, []);

  function renderList() {
    const { list } = remainingList;

    if (!list.length) {
      return (
        <tbody>
          <EmptyTable />
        </tbody>
      );
    }

    return (
      <tbody>
        {remainingList.list.map((i) => (
          <tr key={i.id} className="h-10 transition-colors hover:bg-gray-50">
            <TableRow className="w-[400px]">
              <a href="#" className="text-blue-500">
                {i.stockName}
              </a>
            </TableRow>
            <TableRow>{renderUnitOrUnitsText(i.currentQty)}</TableRow>
            <TableRow>
              <span
                className="flex h-11 cursor-pointer items-center justify-end gap-2 text-blue-500"
                onClick={toggle}
              >
                <BiEdit className="-mt-1" />
                Record Count
              </span>
            </TableRow>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <Observer>
      {() => (
        <Table
          title="Remaining"
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
