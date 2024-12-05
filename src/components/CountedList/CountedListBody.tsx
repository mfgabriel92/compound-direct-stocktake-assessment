import { HiDotsVertical, HiChevronDoubleRight } from "react-icons/hi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";

function CountedListBody() {
  return (
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
  );
}

export { CountedListBody };
