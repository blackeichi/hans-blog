import { SetStateType, TFolder } from "$utils/types";

export interface IWindowTitle {
  isProfile?: boolean;
  windowState: TFolder;
  item: TFolder;
  setWindowState: SetStateType<TFolder>;
  onChangeFolderState: (value?: TFolder) => void;
}
