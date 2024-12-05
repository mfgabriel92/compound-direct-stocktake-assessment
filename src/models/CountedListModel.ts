export type CountedListStatus = "done" | "variance" | "skipped";

export interface CountedListModel {
  stockName: string,
  previousQty: number,
  count: number,
  movement: number,
  status: CountedListStatus
}