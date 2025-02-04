import { SetStateType, TFolder } from "$utils/types";

export interface IWindowTitle {
  windowState: TFolder;
  item: TFolder;
  setWindowState: SetStateType<TFolder>;
  onChangeFolderState: (value?: TFolder) => void;
}
