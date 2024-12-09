import { AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { RemainingListTable, CountedListTable } from "./components";
import { RecordCountModal } from "./components/ui/Modal";
import { useModal } from "./contexts";
import { ModalType } from "./enums";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { isOpen } = useModal();

  return (
    <>
      <ToastContainer />
      <main className="mx-auto flex max-w-7xl flex-col py-8">
        <div className="flex items-center gap-4">
          <span className="cursor-pointer rounded-md border-[1px] p-3 transition-all hover:bg-gray-500 hover:text-white">
            <FaArrowLeft />
          </span>
          <h2 className="font-bold text-4xl">Stocktake #98</h2>
        </div>
        <RemainingListTable />
        <CountedListTable />
        <AnimatePresence>
          {isOpen(ModalType.RecordCount) && <RecordCountModal />}
        </AnimatePresence>
      </main>
    </>
  );
}
