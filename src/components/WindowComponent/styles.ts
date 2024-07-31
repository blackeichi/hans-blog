import { motion } from "framer-motion";
import { styled } from "styled-components";

export const WindowBox = styled(motion.div)<{
  item: {
    isMax: boolean;
    x: number;
    y: number;
    width?: number;
    height?: number;
  };
  index: number;
}>`
  position: absolute;
  left: ${(props) => (props.item.isMax ? 0 : `${props.item.x}px`)};
  top: ${(props) => (props.item.isMax ? 0 : `${props.item.y}px`)};
  width: ${(props) => (props.item.isMax ? "100%" : `${props.item.width}px`)};
  height: ${(props) => (props.item.isMax ? "100%" : `${props.item.height}px`)};
  z-index: ${(props) => props.index};
  background-color: ${(props) => props.theme.gray};
  border-top: ${(props) =>
    props.item.isMax ? "none" : `4px solid ${props.theme.lightGray}`};
  border-left: ${(props) =>
    props.item.isMax ? "none" : `4px solid ${props.theme.lightGray}`};
  border-bottom: ${(props) =>
    props.item.isMax ? "none" : `4px solid ${props.theme.shadow}`};
  border-right: ${(props) =>
    props.item.isMax ? "none" : `4px solid ${props.theme.shadow}`};
`;

export const WindowContentBox = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  padding: 10px;
  padding-bottom: 5px;
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

export const WindowTitleBox = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
  position: relative;
  font-family: "Retro";
  font-size: 10px;
`;
export const Title = styled.div`
  padding-left: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
`;
export const WindowTitleExtends = styled.div`
  position: absolute;
  left: -500px;
  top: -500;
  width: calc(100% + 1000px);
  height: calc(100% + 1000px);
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
  background-color: ${(props) => props.theme.gray};
  border-top: 3px solid ${(props) => props.theme.black};
  border-left: 1px solid ${(props) => props.theme.black};
  border-bottom: 1px solid ${(props) => props.theme.black};
  border-right: 1px solid ${(props) => props.theme.black};
`;
export const UnMaximizationBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const UnMaximizationIcom = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  background-color: ${(props) => props.theme.gray};
  border-top: 2px solid ${(props) => props.theme.black};
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
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 2px;
  padding-right: 1px;
`;
