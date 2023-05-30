import { items } from "./items.model";

export interface stores {
  id: number,
  name: string,
  createdAt: string,
  items: items[]
}

export interface storesEdit {
  id: number,
  name: string,
  createdAt: string,
}
