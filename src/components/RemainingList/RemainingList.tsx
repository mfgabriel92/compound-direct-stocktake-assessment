import { RemainingListBody } from "./RemainingListBody.tsx";
import { RemainingListHeader } from "./RemainingListHeader.tsx";

function RemainingList() {
  return (
    <>
      <p className="text-xl font-semibold text-gray-500">Remaining</p>
      <div className="w-full rounded-md bg-white px-12 py-8 shadow-md">
        <table className="w-full table-auto">
          <RemainingListHeader />
          <RemainingListBody />
        </table>
      </div>
    </>
  );
}

export { RemainingList };
