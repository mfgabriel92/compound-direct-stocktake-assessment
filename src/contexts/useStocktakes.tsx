import { Observer } from "mobx-react-lite";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { StocktakeModel } from "../models";
import { stocktakesList } from "../stores";

interface Stocktake {
  list: StocktakeModel[];
  isLoading: boolean;
  error: Error | null;
}

interface StocktakeContextData extends PropsWithChildren {
  remainingStocktakeItems: Stocktake;
  countedStocktakeItems: Stocktake;
  updateStocktakeAsSkipped: (stocktakeItem: StocktakeModel) => void;
  updateStocktakeItemCount: (stocktakeItem: StocktakeModel) => void;
}

const StocktakeContext = createContext<StocktakeContextData>(
  {} as StocktakeContextData,
);

export function StocktakeProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    stocktakesList.getStocktakes();
  }, []);

  function filterUncountedStocktakeItems() {
    return {
      list: stocktakesList.list.filter((i) => i.countValue === null),
      isLoading: stocktakesList.isLoading,
      error: stocktakesList.error,
    } satisfies Stocktake;
  }

  function filterCountedStocktakeItems() {
    return {
      list: stocktakesList.list.filter((i) => i.countValue !== null),
      isLoading: stocktakesList.isLoading,
      error: stocktakesList.error,
    } satisfies Stocktake;
  }

  function updateStocktakeAsSkipped(stocktakeItem: StocktakeModel) {
    stocktakesList.updateStocktakeAsSkipped(stocktakeItem);
  }

  function updateStocktakeItemCount(stocktakeItem: StocktakeModel) {
    stocktakesList.updateStocktakeItemCount(stocktakeItem);
  }

  return (
    <Observer>
      {() => (
        <StocktakeContext.Provider
          value={{
            remainingStocktakeItems: filterUncountedStocktakeItems(),
            countedStocktakeItems: filterCountedStocktakeItems(),
            updateStocktakeAsSkipped,
            updateStocktakeItemCount,
          }}
        >
          {children}
        </StocktakeContext.Provider>
      )}
    </Observer>
  );
}

export function useStocktake() {
  return useContext(StocktakeContext);
}
