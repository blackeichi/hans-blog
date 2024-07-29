import { INITIAL_TASK_STATE } from "$routes/Home/constants";
import { atom } from "recoil";

export type TselectedIndexState = { title: string; state: null | string }[];

export const openState = atom<null | string>({
  key: "openState",
  default: null,
});
export const mouseLocaleState = atom<null | { x: number; y: number }>({
  key: "mouseLocaleState",
  default: null,
});
export const openedFolderState = atom<TselectedIndexState>({
  key: "openedFolderState",
  default: INITIAL_TASK_STATE,
});
export const selectedIndexState = atom<object>({
  key: "mouseLocaleState",
  default: {},
});
