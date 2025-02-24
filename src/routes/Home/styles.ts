import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HomeContainer = styled.div<{ $taskbarHeight: number }>`
  width: 100%;
  height: ${(props) => `calc(100% - ${props.$taskbarHeight}px)`};
  outline: none;
  position: relative;
  box-sizing: border-box;
`;
export const Drag = styled.div<{
  width: number;
  height: number;
  x: number;
  y: number;
}>`
  position: absolute;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};
  border: 1px dashed ${(props) => props.theme.gray};
`;
export const HomeIconBox = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};
  z-index: 1;
  width: fit-content;
  height: fit-content;
`;

export const IconContextMenuBox = styled.div`
  padding-bottom: 2px;
  padding-right: 2px;
  background-color: ${(props) => props.theme.gray};
  width: 150px;
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.darkGray};
  border-right: 2px solid ${(props) => props.theme.darkGray};
`;
export const ContextMenu = styled(motion.div)`
  padding: 5px 0;
  padding-left: 30px;
  font-size: 13px;
`;
