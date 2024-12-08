import clsx from "clsx";
import { PropsWithChildren } from "react";
import { Loading } from "../../Loading.tsx";
import { EmptyTable } from "./EmptyTable.tsx";

interface Props extends PropsWithChildren {
  title: string;
  header: string[];
  className?: string;
  isLoading: boolean;
  isEmpty?: boolean;
}

function Table({
  title,
  header,
  className,
  isLoading,
  isEmpty,
  children,
}: Props) {
  function renderTableHeader() {
    return header.map((h) => (
      <th key={h} className="text-start font-medium text-xs">
        {h.toUpperCase()}
      </th>
    ));
  }

  function renderTableBody() {
    if (isLoading) {
      return <Loading />;
    } else if (!isLoading && isEmpty) {
      return <EmptyTable />;
    } else {
      return children;
    }
  }

  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <p className="text-xl">{title}</p>
      <div className="w-full rounded-md bg-white px-10 py-6 shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="my-3 h-10 border-b-[1px] border-gray-200/50 text-sm">
              {renderTableHeader()}
            </tr>
          </thead>
          {renderTableBody()}
        </table>
      </div>
    </div>
  );
}

export { Table };
