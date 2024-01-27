export interface IListItem {
  id: number,
  name: string,
}

export interface IListResponse {
  result: number,
  pages: number,
  page: number,
  items: IListItem[],
}
