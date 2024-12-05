import { CountedListBody } from "./CountedListBody.tsx";
import { CountedListHeader } from "./CountedListHeader.tsx";

function CountedList() {
  return (
    <>
      <p className="text-xl font-semibold text-gray-500">Remaining</p>
      <div className="w-full rounded-md bg-white px-12 py-8 shadow-md">
        <table className="w-full table-auto">
          <CountedListHeader />
          <CountedListBody />
        </table>
      </div>
    </>
  );
}

export { CountedList };
