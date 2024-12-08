import axios from "axios";
import { StocktakeModel } from "../models";

const url = "http://localhost:3000/stocktakes";

export async function fetchStocktakes(): Promise<StocktakeModel[]> {
  const { data: response } = await axios.get<StocktakeModel[]>(url);
  return response;
}

export async function skipStocktake(
  data: StocktakeModel,
): Promise<StocktakeModel> {
  const { data: response } = await axios.put(`${url}/${data.stocktakeItemId}`, {
    ...data,
    priorQuantity: 0,
    countValue: 0,
    movement: 0,
    dateSkipped: new Date(),
  } satisfies StocktakeModel);

  return response;
}
