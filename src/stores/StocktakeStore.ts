import { makeAutoObservable } from "mobx";
import { StocktakeModel } from "../models";
import { fetchStocktakes, updateStocktake } from "../services/";

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

  updateStocktakeAsSkipped(data: StocktakeModel): void {
    this.isLoading = true;
    this.performUpdate(data);
  }

  updateStocktakeCount(data: StocktakeModel): void {
    this.isLoading = true;
    const body = {
      ...data,
      countValue: data.countValue,
      modifiedDate: new Date(),
    } as StocktakeModel;
    this.performUpdate(body);
  }

  private performUpdate(body: StocktakeModel): void {
    console.log(body);
    updateStocktake(body).then((response: StocktakeModel) => {
      const i = this.list.findIndex(
        (i) => i.stocktakeItemId === body.stocktakeItemId,
      );
      this.list[i] = response;
      this.isLoading = false;
    });
  }
}

const stocktakesList = new Stocktake();
export { stocktakesList };
