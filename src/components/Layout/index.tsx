import styled from "styled-components";
import { Taskbar } from "./Taskbar";
import { useSetRecoilState } from "recoil";
import { mouseLocaleState, openState } from "$utils/atom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const setOpenState = useSetRecoilState(openState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  return (
    <Backgorund
      onClick={() => {
        setOpenState(null);
        setMouseLocale(null);
      }}
      onContextMenu={(event) => {
        event.preventDefault();
      }}
    >
      {children}
      <Taskbar />
    </Backgorund>
  );
};

const Backgorund = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgGreen};
  position: relative;
`;
