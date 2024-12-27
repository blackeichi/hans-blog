import { Suspense, lazy, useState, useEffect } from "react";
import { WindowOverlay } from "./Components/WindowOverlay";
import { TFolder } from "$utils/types";
import { folderState } from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { TASK_LIST, TASK_STATE } from "$routes/Home/constants";
import { WindowTitle } from "./Components/WindowTitle";

const ProfileContent = lazy(
  () => import("./Components/Contents/ProfileContent")
);
const WindowContent = lazy(() => import("./Components/Contents/WindowContent"));

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
  const isProfile = item.title === TASK_LIST.Profile;
  return (
    <WindowOverlay
      windowState={windowState}
      setWindowState={setWindowState}
      onChangeFolderState={onChangeFolderState}
      index={index}
    >
      <WindowTitle
        isProfile={isProfile}
        windowState={windowState}
        item={item}
        setWindowState={setWindowState}
        setFolderState={setFolderState}
        onChangeFolderState={onChangeFolderState}
        index={index}
      />
      <Suspense fallback={<></>}>
        {isProfile ? (
          <ProfileContent />
        ) : (
          <WindowContent type={TASK_LIST[item.title]} />
        )}
      </Suspense>
    </WindowOverlay>
  );
};
