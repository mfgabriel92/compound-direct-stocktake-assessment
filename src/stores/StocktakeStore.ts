import { makeAutoObservable } from "mobx";
import { StocktakeModel } from "../models";
import { fetchStocktakes, updateStocktake } from "../services/";

export class StocktakeStore {
  list: StocktakeModel[] = [];
  isLoading = false;
  error: Error | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getStocktakes(): void {
    this.isLoading = true;
    fetchStocktakes().then((stocktakesList) => {
      this.list = stocktakesList;
      this.isLoading = false;
    });
  }

  updateStocktakeAsSkipped(data: StocktakeModel): void {
    this.isLoading = true;
    const body = {
      ...data,
      countValue: 0,
      dateSkipped: new Date(),
    } satisfies StocktakeModel;
    this.performUpdate(body);
  }

  updateStocktakeItemCount(data: StocktakeModel): void {
    this.isLoading = true;
    const body = {
      ...data,
      countValue: data.countValue,
      modifiedDate: new Date(),
    } satisfies StocktakeModel;
    this.performUpdate(body);
  }

  private performUpdate(body: StocktakeModel): void {
    updateStocktake(body)
      .then((response: StocktakeModel) => {
        const i = this.list.findIndex(
          (i) => i.stocktakeItemId === body.stocktakeItemId,
        );
        this.list[i] = response;
      })
      .catch((error: Error) => {
        this.error = error;
      })
      .finally(() => (this.isLoading = false));
  }
}

const stocktakesList = new StocktakeStore();
export { stocktakesList };
