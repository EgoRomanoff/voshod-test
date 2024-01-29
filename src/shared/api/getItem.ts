import { IItemResponse } from "../types/item-types";
import { apiFetch } from "./apiFetch";

export const getItem = async (id: number) => {
  const data = await apiFetch<IItemResponse>(`/?w=item&id=${id}`);

  return data;
};
