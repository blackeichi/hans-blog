import styled from "styled-components";
import { Taskbar } from "./Taskbar";
import { useSetRecoilState } from "recoil";
import { openState } from "$utils/atom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const setOpenState = useSetRecoilState(openState);
  return (
    <Backgorund onClick={() => setOpenState(null)}>
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
