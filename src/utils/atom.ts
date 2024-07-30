import { atom } from "recoil";

export type TselectedIndexState = {
  title: string;
  state: null | string;
  x: number;
  y: number;
  width: number;
  height: number;
}[];
export type TSizeState = {
  width: number;
  height: number;
};
export const selectedState = atom<null | string>({
  key: "selectedState",
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
export const sizeState = atom<TSizeState>({
  key: "sizeState",
  default: {
    width: 0,
    height: 0,
  },
});
