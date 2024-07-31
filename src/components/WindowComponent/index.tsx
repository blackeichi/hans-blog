import { useState, useEffect } from "react";
import { WindowOverlay } from "./Components/WindowOverlay";
import { TFolder } from "$utils/types";
import { folderState } from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { TASK_LIST, TASK_STATE } from "$routes/Home/constants";
import { ProfileContent } from "./Components/Contents/ProfileContent";
import { WindowContent } from "./Components/Contents/WindowContent";
import { WindowTitle } from "./Components/WindowTitle";

interface WindowProps {
  item: TFolder;
  index: number;
}

export const WindowComponent = ({ item, index }: WindowProps) => {
  const [windowState, setWindowState] = useState<TFolder>(item);
  useEffect(() => {
    setWindowState(item);
  }, [item]);
  const setFolderState = useSetRecoilState(folderState);
  const onChangeFolderState = (value?: TFolder) => {
    setFolderState((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length),
      { ...(value || { ...windowState, state: TASK_STATE.OPEN }) },
    ]);
  };
  return (
    <WindowOverlay
      windowState={windowState}
      setWindowState={setWindowState}
      onChangeFolderState={onChangeFolderState}
      index={index}
    >
      <WindowTitle
        windowState={windowState}
        item={item}
        setWindowState={setWindowState}
        setFolderState={setFolderState}
        onChangeFolderState={onChangeFolderState}
        index={index}
      />
      {item.title === TASK_LIST.Profile ? (
        <ProfileContent />
      ) : (
        <WindowContent />
      )}
    </WindowOverlay>
  );
};
