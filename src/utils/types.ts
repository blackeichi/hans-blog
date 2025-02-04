import { Dispatch, SetStateAction } from "react";

export type TSelectedState = null | string[];

export type TMouseLocaleState = null | { x: number; y: number };

export type TFolder = {
  title: string;
  icon: string;
  state: null | string;
  isMax: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
};
export type TFolderList = TFolder[];

export type TSizeState = {
  width: number;
  height: number;
};

export type TActionState = {
  type: string;
  value?: any;
} | null;

export type TDragState = {
  startX: number;
  endX?: number | undefined;
  startY: number;
  endY?: number | undefined;
} | null;

export type SetStateType<T> = Dispatch<SetStateAction<T>>;
export interface FetchState {
  loading: boolean;
  statusCode: number;
  data: any;
}
export type MutateFunctionType = <F>(body: F) => void;
export type MutationReturnType = [MutateFunctionType, FetchState];
