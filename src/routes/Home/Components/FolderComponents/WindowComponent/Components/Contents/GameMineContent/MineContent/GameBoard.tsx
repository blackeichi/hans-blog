import { GameStore } from "../store";
import { GLOBAL_COLOR } from "$utils/constants";
import { GameBoardBox, GridButton, GridItem, GridItemWrapper } from "../styles";

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
