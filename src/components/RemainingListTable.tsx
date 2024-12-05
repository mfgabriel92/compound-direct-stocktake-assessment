import { Observer } from "mobx-react-lite";
import { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { Table } from ".";
import { remainingList } from "../stores";
import { Loading } from "./ui";

export function RemainingListTable() {
  const header = ["stock name", "current qty", ""];

  useEffect(() => {
    remainingList.getRemainingList();
  }, []);

  function renderList() {
    return (
      <tbody>
        {remainingList.list.map((i) => (
          <tr className="h-12 transition-colors hover:bg-gray-50">
            <td className="w-[400px]">
              <a href="#" className="text-blue-500">
                {i.stockName}
              </a>
            </td>
            <td>{i.currentQty}</td>
            <td>
              <span className="flex h-12 cursor-pointer items-center justify-end gap-2 text-blue-500">
                <BiEdit className="-mt-1" />
                Record Count
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <Observer>
      {() => (
        <Table title="Remaining" header={header} className="mt-12">
          {remainingList.isLoading ? <Loading /> : renderList()}
        </Table>
      )}
    </Observer>
  );
}
