import { atom } from "recoil";

export type TselectedIndexState = {
  title: string;
  state: null | string;
  x: number;
  y: number;
  width: number;
  height: number;
}[];

export const openState = atom<null | string>({
  key: "openState",
  default: null,
});
export const mouseLocaleState = atom<null | { x: number; y: number }>({
  key: "mouseLocaleState",
  default: null,
});
export const folderState = atom<TselectedIndexState>({
  key: "folderState",
  default: [],
});
