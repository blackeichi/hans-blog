import styled from "styled-components";

export const EachOptionBox = styled.div<{ selected: Boolean }>`
  cursor: pointer;
  padding: 10px;
  height: 35px;
  background-color: ${(props) =>
    props.selected ? props.theme.darkGray : props.theme.whiteColor};
  color: ${(props) => (props.selected ? "white" : "")};
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const AutoCompleteComponentBox = styled.div<{ width: string }>`
  display: flex;
  align-items: center;
  position: relative;
  width: ${(props) => props.width};
`;
export const SelectBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const OptionListBox = styled.div`
  position: fixed;
  width: 200px;
  overflow: hidden;
  z-index: 300;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
`;
export const OptionsList = styled.div<{ fontSize: string }>`
  background-color: white;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.fontSize};
  max-height: 350px;
  overflow-y: scroll;
  cursor: pointer;
`;

export const Box = styled.div<{
  height: string;
  fontSize: string;
  disabled: Boolean;
}>`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.disabled ? "lightgray" : "black")};
  display: flex;
  align-items: center;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.gray};
`;
export const Inputbox = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding: 10px;
  box-sizing: border-box;
`;
