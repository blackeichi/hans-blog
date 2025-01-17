import { atom } from "recoil";
import {
  TActionState,
  TMouseLocaleState,
  TSelectedState,
  TSizeState,
  TFolderList,
} from "./types";

// 선택된 icon의 상태
export const selectedState = atom<TSelectedState>({
  key: "selectedState",
  default: null,
});

// 마우스 위치 state
export const mouseLocaleState = atom<TMouseLocaleState>({
  key: "mouseLocaleState",
  default: null,
});

// 현재 열려있는 폴더들의 state
export const folderState = atom<TFolderList>({
  key: "folderState",
  default: [],
});

// 바탕화면 size state
export const sizeState = atom<TSizeState>({
  key: "sizeState",
  default: {
    width: 0,
    height: 0,
  },
});

// action state. 리렌더링 최소화를 위해 action을 따로 처리하는 컴포넌트에서 사용
export const actionState = atom<TActionState>({
  key: "actionState",
  default: null,
});

export const alertMsgState = atom<string | null>({
  key: "alertMsgState",
  default: null,
});

// 로그인 여부
export const isLoggedInState = atom<boolean>({
  key: "isLoggedInState",
  default: false,
});

export const loadingState = atom<number>({
  key: "loadingState",
  default: 0,
});
export const errorState = atom<string | React.ReactNode>({
  key: "errorState",
  default: null,
});
