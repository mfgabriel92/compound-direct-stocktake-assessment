import { makeAutoObservable } from "mobx";
import { StocktakeModel } from "../models";
import { fetchStocktakes, skipStocktake } from "../services/";

export class Stocktake {
  list: StocktakeModel[] = [];
  isLoading = false;

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

  setStocktakeAsSkipped(data: StocktakeModel): void {
    this.isLoading = true;
    skipStocktake(data)
      .then((response: StocktakeModel) => {
        const i = this.list.findIndex(
          (i) => i.stocktakeItemId === data.stocktakeItemId,
        );
        this.list[i] = response;
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const stocktakesList = new Stocktake();
export { stocktakesList };
