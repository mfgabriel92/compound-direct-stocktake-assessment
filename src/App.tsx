import { FaArrowLeft } from "react-icons/fa";
import { RemainingList, CountedList } from "./components";

function App() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 py-8">
      <div className="flex items-center gap-4">
        <span className="cursor-pointer rounded-md border-[1px] p-3 transition-all hover:bg-gray-500 hover:text-white">
          <FaArrowLeft />
        </span>
        <h2 className="text-4xl font-semibold text-gray-500">Stocktake #98</h2>
      </div>

      <RemainingList />
      <CountedList />
    </main>
  );
}

export default App;
