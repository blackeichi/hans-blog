import { atom } from "recoil";

export const openState = atom<null | string>({
  key: "openState",
  default: null,
});
