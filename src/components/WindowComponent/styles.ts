import { motion } from "framer-motion";
import { styled } from "styled-components";
import { FlexBox } from "styles";

export const WindowBox = styled(motion.div)<{
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

export const ResizeWindowBox = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.theme.gray};
  border: 4px solid ${(props) => props.theme.lightGray};
  border-right: 4px solid ${(props) => props.theme.shadow};
  border-bottom: 4px solid ${(props) => props.theme.shadow};
  right: -2px;
  bottom: -2px;
  cursor: nwse-resize;
`;

export const WindowTitleBox = styled.div`
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
  position: relative;
`;
export const WindowTitleExtends = styled.div`
  position: absolute;
  left: -100px;
  top: -100;
  width: calc(100% + 200px);
  height: calc(100% + 200px);
`;
export const IconBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.gray};
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.shadow};
  border-right: 2px solid ${(props) => props.theme.shadow};
`;
export const MinimalizationIcon = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid ${(props) => props.theme.black};
`;
export const MaximizationIcon = styled.div`
  width: 100%;
  height: 100%;
  border-top: 3px solid ${(props) => props.theme.black};
  border-left: 1px solid ${(props) => props.theme.black};
  border-bottom: 1px solid ${(props) => props.theme.black};
  border-right: 1px solid ${(props) => props.theme.black};
`;
export const CloseIcon = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WindowContentBox = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  padding: 10px;
  padding-bottom: 5px;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-top: 1px solid ${(props) => props.theme.darkGray};
  border-left: 1px solid ${(props) => props.theme.darkGray};
  outline: 4px solid ${(props) => props.theme.shadow};
  overflow-x: scroll;
`;
export const PageBtnBox = styled(FlexBox)`
  padding: 5px 10px;
  color: ${(props) => props.theme.shadow};
  gap: 10px;
`;
export const TempBox = styled.div`
  width: 100%;
  height: 1000px;
`;
