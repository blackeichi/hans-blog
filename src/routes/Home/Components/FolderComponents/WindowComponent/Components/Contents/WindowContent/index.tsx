import styled from "styled-components";
import { WindowTopContent } from "./WindowTopContent";
import { WindowContentBox } from "../../../styles";
import { TASK_LIST } from "$routes/Home/constants";
import { DocumentWindow } from "./DocumentWindow";
import { memo } from "react";
import { MusicWindow } from "./MusicWindow";

const WindowContent = memo(({ type }: { type: string }) => {
  return (
    <>
      <WindowTopContent />
      <WindowContentBox>
        <Content>
          {type === TASK_LIST.Documents ? (
            <DocumentWindow />
          ) : type === TASK_LIST.Musics ? (
            <MusicWindow />
          ) : (
            <TempBox />
          )}
        </Content>
      </WindowContentBox>
    </>
  );
});
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-top: 1px solid ${(props) => props.theme.darkGray};
  border-left: 1px solid ${(props) => props.theme.darkGray};
  outline: 4px solid ${(props) => props.theme.shadow};
  overflow-x: scroll;
  padding: 10px;
`;
const TempBox = styled.div`
  width: 100%;
  height: 1000px;
`;
export default WindowContent;
