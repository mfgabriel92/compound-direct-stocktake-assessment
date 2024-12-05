import { ReactNode } from "react";

interface Props {
  header: string[];
  children: ReactNode;
}

function Table({ header, children }: Props) {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="text-normal h-12 border-b-[1px] border-gray-200 text-sm text-gray-500">
          {header.map((h) => (
            <th className="text-start font-normal">{h.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
}

export { Table };
