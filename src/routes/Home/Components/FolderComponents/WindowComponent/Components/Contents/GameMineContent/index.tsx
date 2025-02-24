import { ContentWrapperComponent } from "$components/ContentWrapperComponent";
import { GLOBAL_COLOR } from "$utils/constants";
import { memo } from "react";
import { MenuBtnsComponent } from "../../MenuBtnsComponent";
import { GameMineMenus } from "./GameMineMenus";
import { MineContent } from "./MineContent";

const GameMineContent = memo(() => {
  return (
    <>
      <MenuBtnsComponent>
        <GameMineMenus />
      </MenuBtnsComponent>
      <ContentWrapperComponent
        style={{
          padding: 0,
          overflow: "scroll",
          outline: `6px solid ${GLOBAL_COLOR.lightGray}`,
          border: "none",
        }}
      >
        <MineContent />
      </ContentWrapperComponent>
    </>
  );
});
export default GameMineContent;
