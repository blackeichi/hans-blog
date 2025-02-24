import { useState } from "react";
import { ButtonComponent } from "$components/ButtonComponent";

export const GameMineMenus = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonComponent
        action={() => {
          setOpen((prev) => !prev);
        }}
        content="게임(G)"
        width="60px"
        height="25px"
        isShadow={false}
        onBlur={() => setOpen(false)}
        disabled={false}
      />
      <ButtonComponent
        action={() => {
          setOpen((prev) => !prev);
        }}
        content="도움말(H)"
        width="80px"
        height="25px"
        isShadow={false}
        onBlur={() => setOpen(false)}
        disabled={false}
      />
    </>
  );
};
