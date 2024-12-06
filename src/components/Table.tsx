﻿import clsx from "clsx";
import { ReactNode } from "react";
import { Loading } from "./ui";

interface Props {
  title: string;
  header: string[];
  className?: string;
  isLoading: boolean;
  children: ReactNode;
}

function Table({ title, header, className, isLoading, children }: Props) {
  function renderHeader() {
    return header.map((h) => (
      <th key={h} className="text-start font-medium text-xs">
        {h.toUpperCase()}
      </th>
    ));
  }

  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <p className="text-xl text-gray-500">{title}</p>
      <div className="w-full rounded-md bg-white px-10 py-6 shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="my-3 h-12 border-b-[1px] border-gray-200 text-sm text-gray-500">
              {renderHeader()}
            </tr>
          </thead>
          {isLoading ? <Loading /> : children}
        </table>
      </div>
    </div>
  );
}

export { Table };
