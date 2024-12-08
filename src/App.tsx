import { AnimatePresence } from "framer-motion";
import { toJS } from "mobx";
import { Observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RemainingListTable, CountedListTable } from "./components";
import { RecordCountModal } from "./components/ui/Modal";
import { useModal } from "./contexts";
import { ModalType } from "./enums";
import { stocktakesList } from "./stores";

export default function App() {
  const { isOpen } = useModal();

  useEffect(() => {
    stocktakesList.getStocktakes();
  }, []);

  return (
    <Observer>
      {() => (
        <main className="mx-auto flex max-w-7xl flex-col py-8">
          <div className="flex items-center gap-4">
            <span className="cursor-pointer rounded-md border-[1px] p-3 transition-all hover:bg-gray-500 hover:text-white">
              <FaArrowLeft />
            </span>
            <h2 className="font-bold text-4xl">Stocktake #98</h2>
          </div>
          <RemainingListTable stocktakes={toJS(stocktakesList)} />
          <CountedListTable stocktakes={toJS(stocktakesList)} />
          <AnimatePresence>
            {isOpen(ModalType.RecordCount) && <RecordCountModal />}
          </AnimatePresence>
        </main>
      )}
    </Observer>
  );
}
