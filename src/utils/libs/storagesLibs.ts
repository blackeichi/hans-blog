import { TFolderList } from "$utils/types";

const FOLDERS = "folders";

export const sesstionStorageLibs = {
  setFolderState: (data: TFolderList) => {
    sessionStorage.setItem(FOLDERS, JSON.stringify(data));
  },
  getFolderState: () => {
    const data = sessionStorage.getItem(FOLDERS);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  },
};
