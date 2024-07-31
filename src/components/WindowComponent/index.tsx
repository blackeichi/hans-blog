import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { Content, PageBtnBox, TempBox, WindowContentBox } from "./styles";
import { WindowOverlay } from "./Components/WindowOverlay";
import { TFolder } from "$utils/types";
import { WindowTitle } from "./Components/WindowTitle";
import { folderState } from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { TASK_STATE } from "$routes/Home/constants";

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
      <WindowContentBox>
        <Content>
          <TempBox />
        </Content>
      </WindowContentBox>
      <PageBtnBox>
        <FontAwesomeIcon fontSize="25px" icon={faCaretLeft} />
        <FontAwesomeIcon fontSize="25px" icon={faCaretRight} />
      </PageBtnBox>
    </WindowOverlay>
  );
};
