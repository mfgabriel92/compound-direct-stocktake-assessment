import { FaArrowLeft } from "react-icons/fa";
import { RemainingListTable, CountedListTable } from "./components";

export default function App() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col py-8">
      <div className="flex items-center gap-4">
        <span className="cursor-pointer rounded-md border-[1px] p-3 transition-all hover:bg-gray-500 hover:text-white">
          <FaArrowLeft />
        </span>
        <h2 className="text-4xl font-bold text-gray-500">Stocktake #98</h2>
      </div>
      <RemainingListTable />
      <CountedListTable />
    </main>
  );
}