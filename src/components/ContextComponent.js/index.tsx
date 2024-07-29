import { mouseLocaleState, openState } from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { ContextContentsBox } from "./ContextContentsBox";

interface ContextComponentProps {
  children: React.ReactNode;
  contextMenu: React.ReactNode;
  id: string;
  styles?: object;
}

export const ContextComponent = ({
  children,
  contextMenu,
  id,
  styles = {},
}: ContextComponentProps) => {
  const setOpenState = useSetRecoilState(openState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  const onOpenContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (contextMenu) {
      setOpenState(id);
      setMouseLocale({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  return (
    <ContextBox onContextMenu={onOpenContextMenu} style={{ ...styles }}>
      {children}
      <ContextContentsBox contextMenu={contextMenu} id={id} />
    </ContextBox>
  );
};

const ContextBox = styled.div`
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`;
