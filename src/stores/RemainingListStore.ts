import { makeAutoObservable } from "mobx";
import { RemainingListModel } from "../models";
import { fetchRemainingList } from "../services/";

export class RemainingList {
  list: RemainingListModel[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }


  getRemainingList(): void {
    this.isLoading = true;
    fetchRemainingList().then((remainingList) => {
      this.list = remainingList;
      this.isLoading = false;
    });
  }
}

const remainingList = new RemainingList();
export { remainingList };