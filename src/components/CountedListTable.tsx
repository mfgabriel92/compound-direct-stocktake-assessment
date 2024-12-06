import clsx from "clsx";
import { Observer } from "mobx-react-lite";
import { useEffect, ReactElement } from "react";
import { IconType } from "react-icons";
import { HiDotsVertical, HiChevronDoubleRight } from "react-icons/hi";
import { HiExclamationTriangle } from "react-icons/hi2";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Table } from ".";
import { CountedListStatus } from "../models";
import { countedList, remainingList } from "../stores";

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

  function renderIcon(status: CountedListStatus) {
    let icon = <></>;

    switch (status) {
      case "done":
        icon = <IoMdCheckmarkCircle className="-mt-1" />;
        break;
      case "variance":
        icon = <HiExclamationTriangle className="-mt-1" />;
        break;
      case "skipped":
        icon = <HiChevronDoubleRight className="-mt-1" />;
    }

    return <Status icon={icon} status={status} />;
  }

  function renderList() {
    return (
      <tbody>
        {countedList.list.map((i) => (
          <tr key={i.id} className="h-12 transition-colors hover:bg-gray-50">
            <td className="w-[400px]">
              <a href="#" className="text-blue-500">
                {i.stockName}
              </a>
            </td>
            <td>{i.previousQty}</td>
            <td>{i.count}</td>
            <td>{i.movement}</td>
            <td>{renderIcon(i.status)}</td>
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

interface StatusProps {
  icon: ReactElement<IconType>;
  status: CountedListStatus;
}

function Status({ icon, status }: StatusProps) {
  return (
    <span
      className={clsx("counted-status flex h-12 items-center gap-1", status)}
    >
      {icon}
      {status}
    </span>
  );
}

export { CountedListTable };
