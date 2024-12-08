export interface StocktakeModel {
  id: string;
  stockName: string;
  currentQty: number;
  previousQty: number;
  count: number;
  movement: number | null;
  skipped: boolean;
}
