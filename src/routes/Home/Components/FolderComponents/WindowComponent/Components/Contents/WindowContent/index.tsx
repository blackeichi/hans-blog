import styled from "styled-components";
import { WindowTopContent } from "./WindowTopContent";
import { WindowContentBox } from "../../../styles";

export const WindowContent = () => {
  return (
    <>
      <WindowTopContent />
      <WindowContentBox>
        <Content>
          <TempBox />
        </Content>
      </WindowContentBox>
    </>
  );
};
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-top: 1px solid ${(props) => props.theme.darkGray};
  border-left: 1px solid ${(props) => props.theme.darkGray};
  outline: 4px solid ${(props) => props.theme.shadow};
  overflow-x: scroll;
`;
const TempBox = styled.div`
  width: 100%;
  height: 1000px;
`;
