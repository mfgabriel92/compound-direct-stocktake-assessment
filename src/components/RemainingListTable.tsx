import { BiEdit } from "react-icons/bi";
import { Table } from ".";

function RemainingListTable() {
  const header = ["stock name", "current qty", ""];

  return (
    <Table title="Remaining" header={header} className="mt-12">
      <tbody>
        <tr className="h-12 transition-colors hover:bg-gray-50">
          <td className="w-[400px]">
            <a href="#" className="text-blue-500">
              Blue/White Neo Capsule
            </a>
          </td>
          <td>2000 units</td>
          <td>
            <span className="flex h-12 cursor-pointer items-center justify-end gap-2 text-blue-500">
              <BiEdit className="-mt-1" />
              Record Count
            </span>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export { RemainingListTable };
