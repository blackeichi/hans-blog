import { useState } from "react";
import { MineContentWrapper } from "../styles";
import { getGameObject } from "../store";
import { GameBoard } from "./GameBoard";

export const MineContent = () => {
  const [difficulty, setDifficulty] = useState<0 | 1 | 2>(2);
  const game = getGameObject(difficulty);
  return (
    <MineContentWrapper>{game && <GameBoard game={game} />}</MineContentWrapper>
  );
};
