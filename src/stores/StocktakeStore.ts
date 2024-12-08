import { makeAutoObservable } from "mobx";
import { StocktakeModel } from "../models";
import { fetchStocktakes } from "../services/";
import { skipStocktake } from "../services/stocktakes";

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
      .then(() => {
        this.getStocktakes();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const stocktakesList = new Stocktake();
export { stocktakesList };
