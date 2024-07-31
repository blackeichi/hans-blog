import { WindowContentBox } from "$components/WindowComponent/styles";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { FlexBox } from "styles";

export const WindowContent = () => {
  return (
    <>
      <WindowContentBox>
        <Content>
          <TempBox />
        </Content>
      </WindowContentBox>
      <PageBtnBox>
        <FontAwesomeIcon fontSize="25px" icon={faCaretLeft} />
        <FontAwesomeIcon fontSize="25px" icon={faCaretRight} />
      </PageBtnBox>
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
const PageBtnBox = styled(FlexBox)`
  padding: 5px 10px;
  color: ${(props) => props.theme.shadow};
  gap: 10px;
`;
const TempBox = styled.div`
  width: 100%;
  height: 1000px;
`;
