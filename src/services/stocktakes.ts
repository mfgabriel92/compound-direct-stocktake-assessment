import axios from "axios";
import { StocktakeModel } from "../models";

const url = "http://localhost:3000/stocktakes";

export async function fetchStocktakes(): Promise<StocktakeModel[]> {
  const { data: response } = await axios.get<StocktakeModel[]>(url);
  return response;
}

export async function updateStocktake(
  body: StocktakeModel,
): Promise<StocktakeModel> {
  const { data: response } = await axios.put(`${url}/${body.stocktakeItemId}`, {
    ...body,
  });
  return response;
}
