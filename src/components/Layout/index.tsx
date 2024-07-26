import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Backgorund>{children}</Backgorund>;
};

const Backgorund = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgGreen};
`;
