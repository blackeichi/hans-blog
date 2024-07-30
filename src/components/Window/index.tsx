import { folderState } from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { FlexBox } from "styles";
import { ClickButtonEvent } from "./ClickButtonEvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

interface WindowProps {
  item: {
    title: string;
    state: null | string;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  index: number;
}

export const Window = ({ item, index }: WindowProps) => {
  const setFolderState = useSetRecoilState(folderState);
  const onClick = () => {
    setFolderState((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length),
      item,
    ]);
  };
  const WindowBtns = [
    <MinimalizationIcon />,
    <MaximizationIcon />,
    <CloseIcon>x</CloseIcon>,
  ];
  return (
    <WindowBox onClick={onClick} item={item} index={index}>
      <WindowTitle>
        {item.title}
        <FlexBox onClick={(event) => event.stopPropagation()}>
          {WindowBtns.map((icon, index) => (
            <IconBox key={index}>
              <ClickButtonEvent>{icon}</ClickButtonEvent>
            </IconBox>
          ))}
        </FlexBox>
      </WindowTitle>
      <WindowContentBox>
        <Content>
          <TempBox />
        </Content>
      </WindowContentBox>
      <PageBtnBox>
        <FontAwesomeIcon fontSize="25px" icon={faCaretLeft} />
        <FontAwesomeIcon fontSize="25px" icon={faCaretRight} />
      </PageBtnBox>
    </WindowBox>
  );
};

const WindowBox = styled.div<{
  item: {
    x: number;
    y: number;
    width?: number;
    height?: number;
  };
  index: number;
}>`
  position: absolute;
  left: ${(props) => `${props.item.x}px`};
  top: ${(props) => `${props.item.y}px`};
  width: ${(props) => `${props.item.width}px`};
  height: ${(props) => `${props.item.height}px`};
  z-index: ${(props) => props.index};
  background-color: ${(props) => props.theme.gray};
  border-top: 4px solid ${(props) => props.theme.lightGray};
  border-left: 4px solid ${(props) => props.theme.lightGray};
  border-bottom: 4px solid ${(props) => props.theme.shadow};
  border-right: 4px solid ${(props) => props.theme.shadow};
`;
const WindowTitle = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.blue};
  color: white;
  font-family: "Retro";
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;
const IconBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.gray};
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.shadow};
  border-right: 2px solid ${(props) => props.theme.shadow};
`;
const MinimalizationIcon = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid ${(props) => props.theme.black};
`;
const MaximizationIcon = styled.div`
  width: 100%;
  height: 100%;
  border-top: 3px solid ${(props) => props.theme.black};
  border-left: 1px solid ${(props) => props.theme.black};
  border-bottom: 1px solid ${(props) => props.theme.black};
  border-right: 1px solid ${(props) => props.theme.black};
`;
const CloseIcon = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WindowContentBox = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  padding: 10px;
  padding-bottom: 5px;
`;
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
