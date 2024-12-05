import axios from "axios";
import { RemainingListModel } from "../models";

export async function fetchRemainingList(): Promise<RemainingListModel[]> {
  const { data } = await axios.get<RemainingListModel[]>("http://localhost:3000/remaining");
  return data;
}