import { motion } from "framer-motion";
import { styled } from "styled-components";

export const MineContentWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const GameBoardBox = styled.div<{ column: number; row: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  border: 4px solid ${({ theme }) => theme.shadow};
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  max-width: ${(props) => `${props.column * 25}px`};
  max-height: ${(props) => `${props.row * 25}px`};
`;
export const GridItemWrapper = styled(motion.div)<{ isSelected: boolean }>`
  position: relative;
  width: 25px;
  height: 25px;
  border: ${(props) =>
    `${props.isSelected ? "1px" : "3px"} solid ${props.theme.lightGray}`};
  border-right: ${(props) =>
    props.isSelected ? "none" : `3px solid ${props.theme.shadow}`};
  border-bottom: 3px solid ${(props) => props.theme.shadow};
`;
export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: #bdbdbd;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GridButton = styled.button<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "none" : "block")};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #bdbdbd;
  font-size: 20px;
  font-weight: bold;
  :disabled {
    background-color: #bdbdbd;
    color: #000000;
  }
`;
