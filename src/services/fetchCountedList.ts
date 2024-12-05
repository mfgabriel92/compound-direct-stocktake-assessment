import axios from "axios";
import { CountedListModel } from "../models";

export async function fetchCountedList(): Promise<CountedListModel[]> {
  const { data } = await axios.get<CountedListModel[]>("http://localhost:3000/counted");
  return data;
}