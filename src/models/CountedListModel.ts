export type CountedListStatus = "done" | "variance" | "skipped";

export interface CountedListModel {
  id: number;
  stockName: string;
  previousQty: number;
  count: number;
  movement: number;
  status: CountedListStatus;
}
