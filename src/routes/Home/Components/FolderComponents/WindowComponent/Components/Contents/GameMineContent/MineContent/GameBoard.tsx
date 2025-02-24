import { styled } from "styled-components";
import { GameStore } from "../store";
import { motion } from "framer-motion";
import { GLOBAL_COLOR } from "$utils/constants";

export const GameBoard = ({ game }: { game: GameStore }) => {
  console.log(game);
  return (
    <GameBoardBox column={game.WIDTH} row={game.HEIGHT}>
      {game.board.map((rows, x) =>
        rows.map((cell, y) => {
          return (
            <GridItemWrapper
              isSelected={cell.isPicked || cell.isOpen}
              whileTap={{
                borderRight: "none",
                borderLeft: `1px solid ${GLOBAL_COLOR.shadow}`,
                borderTop: `1px solid ${GLOBAL_COLOR.shadow}`,
              }}
              transition={{
                duration: 0,
              }}
              key={y}
            >
              <GridButton
                disabled={cell.isPicked}
                isOpen={cell.isOpen}

                /* onClick={() => {
                  onClickHandler(cell, { x, y });
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  onRightClickHandler(cell, { x, y });
                }} */
              >
                {cell.isPicked ? "🚩" : ""}
              </GridButton>
              <GridItem>
                {cell.isZero() ? "" : cell.isMine() ? "💣" : cell.cell}
              </GridItem>
            </GridItemWrapper>
          );
        })
      )}
    </GameBoardBox>
  );
};

const GameBoardBox = styled.div<{ column: number; row: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
  width: 100%;
  height: 100%;
`;
const GridItemWrapper = styled(motion.div)<{ isSelected: boolean }>`
  position: relative;
  width: 25px;
  height: 25px;
  border: ${(props) =>
    `${props.isSelected ? "1px" : "3px"} solid ${props.theme.lightGray}`};
  border-right: ${(props) =>
    props.isSelected ? "none" : `3px solid ${props.theme.shadow}`};
  border-bottom: 3px solid ${(props) => props.theme.shadow};
`;
const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: #bdbdbd;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GridButton = styled.button<{ isOpen: boolean }>`
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
