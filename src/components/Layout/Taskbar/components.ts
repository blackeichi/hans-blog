import { styled } from "styled-components";

export const TaskbarBlankBox = styled.div`
  width: 5px;
  height: 85%;
  background-color: ${(props) => props.theme.grayColor};
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.shadow};
  border-right: 2px solid ${(props) => props.theme.shadow};
`;

export const TaskbarSeparator = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.shadow};
`;
