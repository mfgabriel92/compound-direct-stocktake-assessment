import { BiEdit } from "react-icons/bi";
import { Table } from ".";

function RemainingList() {
  const header = ["stock name", "current qty", ""];

  return (
    <>
      <p className="text-xl font-semibold text-gray-500">Remaining</p>
      <div className="w-full rounded-md bg-white px-12 py-8 shadow-md">
        <Table header={header}>
          <tbody>
            <tr className="h-12 transition-colors hover:bg-gray-50">
              <td>
                <a href="#" className="text-blue-500">
                  Blue/White Neo Capsule
                </a>
              </td>
              <td>2000 units</td>
              <td>
                <span className="flex h-12 cursor-pointer items-center justify-end gap-2 text-blue-500">
                  <BiEdit />
                  Record Count
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export { RemainingList };
