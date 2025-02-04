import { styled } from "styled-components";

export const ContentWrapperComponent = ({
  children = <></>,
}: {
  children?: JSX.Element;
}) => {
  return (
    <ContentWrapperComponentBox>
      <WindowContent>{children}</WindowContent>
    </ContentWrapperComponentBox>
  );
};

const ContentWrapperComponentBox = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  padding: 15px;
  padding-top: 0px;
`;
const WindowContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-top: 1px solid ${(props) => props.theme.darkGray};
  border-left: 1px solid ${(props) => props.theme.darkGray};
  outline: 4px solid ${(props) => props.theme.shadow};
  overflow-x: scroll;
  padding: 10px;
`;
