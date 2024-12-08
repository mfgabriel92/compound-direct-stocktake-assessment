export type StocktakeModel = IStocktakeItem;

interface IStocktakeItemBase {
  stockId: number;
  countValue?: number;
  priorQuantity: number;
}

export interface IStocktakeItem extends IStocktakeItemBase {
  stocktakeItemId: number;
  stockId: number;

  priorValue: number;
  countValue: number;
  movement: number;
  movementValue: number;
  currentQuantity: number;
  currentValue: number;

  performedByUserSub?: string;
  performedByUserName?: string;
  datePerformed?: Date;
  skippedByUserSub?: string;
  skippedByUserName?: string;
  dateSkipped?: Date;

  createdDate: Date;
  modifiedDate: Date;

  name: string;
}
