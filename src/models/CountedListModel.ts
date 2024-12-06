export interface CountedListModel {
  id: number;
  stockName: string;
  previousQty: number;
  count: number;
  movement: number;
  skipped: boolean;
}
