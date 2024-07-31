import { atom } from "recoil";

export type TSelectedState = null | string[];

export type TMouseLocaleState = null | { x: number; y: number };

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

export type TActionState = {
  type: string;
  value?: any;
} | null;

export const selectedState = atom<TSelectedState>({
  key: "selectedState",
  default: null,
});

export const mouseLocaleState = atom<TMouseLocaleState>({
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

export const actionState = atom<TActionState>({
  key: "actionState",
  default: null,
});
