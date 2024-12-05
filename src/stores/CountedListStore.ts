import { makeAutoObservable } from "mobx";
import { CountedListModel } from "../models";
import { fetchCountedList } from "../services";

export class CountedList {
  list: CountedListModel[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }
  
  getCountedList(): void {
    this.isLoading = true;
    fetchCountedList().then((countedList) => {
      this.list = countedList;
      this.isLoading = false;
    });
  }
}

const countedList = new CountedList();
export { countedList };