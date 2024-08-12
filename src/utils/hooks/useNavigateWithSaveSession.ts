import { folderState } from "$utils/atom";
import { sesstionStorageLibs } from "$utils/libs/storagesLibs";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

export const useNavigateWithSaveSession = (url: string) => {
  const navigate = useNavigate();
  const folders = useRecoilValue(folderState);
  return () => {
    sesstionStorageLibs.setFolderState(folders);
    navigate(url);
  };
};
