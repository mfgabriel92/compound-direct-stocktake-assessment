import { BiEdit } from "react-icons/bi";

function RemainingListBody() {
  return (
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
  );
}

export { RemainingListBody };
