import styled from "styled-components";
import { Taskbar } from "./Taskbar";
import { useSetRecoilState } from "recoil";
import { mouseLocaleState, selectedState } from "$utils/atom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const setSelected = useSetRecoilState(selectedState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  return (
    <Backgorund
      onClick={() => {
        setSelected(null);
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
