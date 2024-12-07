export interface StocktakeModel {
  id: number;
  stockName: string;
  currentQty: number;
  previousQty: number;
  count: number;
  movement: number;
  skipped: boolean;
}
