import { styled } from "styled-components";

export const ContentWrapperComponent = ({
  children = <></>,
  style = {},
}: {
  children?: JSX.Element;
  style?: React.CSSProperties;
}) => {
  return (
    <ContentWrapperComponentBox>
      <WindowContent style={style}>{children}</WindowContent>
    </ContentWrapperComponentBox>
  );
};

const ContentWrapperComponentBox = styled.div`
  width: 100%;
  height: calc(100% - 75px);
  padding: 15px;
  padding-top: 0px;
  margin-top: 10px;
`;
const WindowContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-top: 1px solid ${(props) => props.theme.darkGray};
  border-left: 1px solid ${(props) => props.theme.darkGray};
  outline: 4px solid ${(props) => props.theme.shadow};
  padding: 10px;
`;
