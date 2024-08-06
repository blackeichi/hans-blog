import { mouseLocaleState, selectedState } from "$utils/atom";
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
  const selected = useRecoilValue(selectedState);
  const mouseLocale = useRecoilValue(mouseLocaleState);
  return (
    <>
      {selected && mouseLocale && selected.includes(id) && (
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
