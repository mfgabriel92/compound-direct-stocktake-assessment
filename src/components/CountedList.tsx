import { HiDotsVertical, HiChevronDoubleRight } from "react-icons/hi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { Table } from ".";

function CountedList() {
  const header = [
    "stock name",
    "previous qty",
    "count",
    "movement",
    "status",
    "",
  ];

  return (
    <>
      <p className="text-xl font-semibold text-gray-500">Counted</p>
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
              <td>2000 units</td>
              <td>0 units</td>
              <td>
                <span className="flex h-12 items-center gap-2 text-green-500">
                  <IoMdCheckmarkCircle />
                  Done
                </span>
              </td>
              <td className="flex h-12 items-center justify-end">
                <HiDotsVertical className="cursor-pointer text-gray-500 hover:text-gray-900" />
              </td>
            </tr>

            <tr className="h-12 transition-colors hover:bg-gray-50">
              <td>
                <a href="#" className="text-blue-500">
                  Blue/White Neo Capsule
                </a>
              </td>
              <td>2000 units</td>
              <td>2000 units</td>
              <td>0 units</td>
              <td>
                <span className="flex h-12 items-center gap-2 text-orange-700">
                  <IoShieldCheckmark />
                  Variance
                </span>
              </td>
              <td className="flex h-12 items-center justify-end">
                <HiDotsVertical className="cursor-pointer text-gray-500 hover:text-gray-900" />
              </td>
            </tr>

            <tr className="h-12 transition-colors hover:bg-gray-50">
              <td>
                <a href="#" className="text-blue-500">
                  Blue/White Neo Capsule
                </a>
              </td>
              <td>2000 units</td>
              <td>2000 units</td>
              <td>0 units</td>
              <td>
                <span className="flex h-12 items-center gap-2 text-gray-400">
                  <HiChevronDoubleRight />
                  Skipped
                </span>
              </td>
              <td className="flex h-12 items-center justify-end">
                <HiDotsVertical className="cursor-pointer text-gray-500 hover:text-gray-900" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export { CountedList };
