import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { Content, PageBtnBox, TempBox, WindowContentBox } from "./styles";
import { WindowOverlay } from "./Components/WindowOverlay";
import { TFolder } from "$utils/types";
import { WindowTitle } from "./Components/WindowTitle";
import { folderState } from "$utils/atom";
import { useSetRecoilState } from "recoil";

interface WindowProps {
  item: TFolder;
  index: number;
}

export const WindowComponent = ({ item, index }: WindowProps) => {
  const [windowState, setWindowState] = useState<TFolder>(item);
  const setFolderState = useSetRecoilState(folderState);
  const onChangeFolderState = (value?: TFolder) => {
    setFolderState((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length),
      value ? value : windowState,
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
        onChangeFolderState={onChangeFolderState}
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
