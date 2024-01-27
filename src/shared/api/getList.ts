import { IListResponse } from "../types/list-types";
import { apiFetch } from "./apiFetch";

export const getList = async (page: number) => {
  const data = await apiFetch<IListResponse>(`/?w=list&page=${page}`);

  return data;
};
