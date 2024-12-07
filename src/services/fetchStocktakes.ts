import axios from "axios";
import { StocktakeModel } from "../models";

export async function fetchStocktakes(): Promise<StocktakeModel[]> {
  const { data } = await axios.get<StocktakeModel[]>(
    "http://localhost:3000/stocktakes",
  );
  return data;
}
