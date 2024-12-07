import { toJS } from "mobx";
import { Observer } from "mobx-react-lite";
import { useEffect, HTMLAttributes } from "react";
import { BiEdit } from "react-icons/bi";
import { Table } from ".";
import { useModal } from "../contexts";
import { RemainingListModel } from "../models";
import { remainingList } from "../stores";
import { renderUnitOrUnitsText } from "../utils";
import { EmptyTable, TableRow } from "./ui";

export function RemainingListTable() {
  const { toggleOpenClose, setData } = useModal();

  const header = ["Stock Name", "Current Qty", ""];

  useEffect(() => {
    remainingList.getRemainingList();
  }, []);

  function handleToggleOpen(item: RemainingListModel) {
    toggleOpenClose();
    setData(toJS(item));
  }

  function renderTableRows() {
    return remainingList.list.map((item) => (
      <tr key={item.id} className="h-10 transition-colors hover:bg-gray-50">
        <TableRow className="w-[400px] text-blue-500">
          {item.stockName}
        </TableRow>
        <TableRow>{renderUnitOrUnitsText(item.currentQty)}</TableRow>
        <TableRow>
          <ActionButton onClick={() => handleToggleOpen(item)} />
        </TableRow>
      </tr>
    ));
  }

  function renderTableBody() {
    if (!remainingList.list.length) {
      return (
        <tbody>
          <EmptyTable />
        </tbody>
      );
    }

    return <tbody>{renderTableRows()}</tbody>;
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
          {renderTableBody()}
        </Table>
      )}
    </Observer>
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
