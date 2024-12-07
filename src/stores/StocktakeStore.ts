import { makeAutoObservable } from "mobx";
import { StocktakeModel } from "../models";
import { fetchStocktakes } from "../services/";

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
}

const stocktakesList = new Stocktake();
export { stocktakesList };
