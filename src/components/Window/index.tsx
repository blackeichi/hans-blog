import { folderState } from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";

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
  return (
    <WindowBox onClick={onClick} item={item} index={index}>
      <WindowTitle>{item.title}</WindowTitle>
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
  position: fixed;
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
