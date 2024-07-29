import { mouseLocaleState, openState } from "$utils/atom";
import { useRecoilValue } from "recoil";
import { ContextMenuBox } from "./style";

interface ContextContentsBoxProps {
  contextMenu: React.ReactNode;
  id: string;
}

export const ContextContentsBox = ({
  contextMenu,
  id,
}: ContextContentsBoxProps) => {
  const open = useRecoilValue(openState);
  const mouseLocale = useRecoilValue(mouseLocaleState);
  return (
    <>
      {open && mouseLocale && id === open && (
        <ContextMenuBox
          onClick={(event) => event.stopPropagation()}
          mouselocale={mouseLocale}
        >
          {contextMenu}
        </ContextMenuBox>
      )}
    </>
  );
};
