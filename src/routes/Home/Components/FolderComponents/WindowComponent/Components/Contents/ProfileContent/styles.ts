import { styled } from "styled-components";
import { WindowContentBox } from "../../../styles";
import { FlexBox } from "styles";

export const ProfileContentBox = styled(WindowContentBox)`
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px gray;
`;
export const ProfileMenuBox = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  font-size: 11px;
  margin-top: 5px;
`;
export const ProfileMenu = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: ${(props) => (props.isSelected ? "33px" : "30px")};
  padding: 2px 5px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top: 3px solid ${(props) => props.theme.lightGray};
  border-right: 3px solid ${(props) => props.theme.shadow};
  border-bottom: 3px solid ${(props) => props.theme.gray};
  border-left: 3px solid ${(props) => props.theme.lightGray};
  margin-top: ${(props) => (props.isSelected ? "0px" : "3px")};
  z-index: ${(props) => (props.isSelected ? 2 : 0)};
`;
export const MenuName = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 2px;
  border: ${(props) => (props.isSelected ? "1px dotted black" : "none")};
`;
export const ProfileDataBox = styled.div`
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  border-top: 3px solid ${(props) => props.theme.lightGray};
  border-left: 3px solid ${(props) => props.theme.lightGray};
  border-right: 3px solid ${(props) => props.theme.shadow};
  border-bottom: 3px solid ${(props) => props.theme.shadow};
  z-index: 1;
  padding: 10px;
`;
export const ProfileBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SystemWrapper = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 15px 0;
`;
export const Img = styled.div<{ src: string }>`
  width: 220px;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
  flex-shrink: 0;
`;
export const ColBox = styled(FlexBox)`
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15px;
  padding-right: 30px;
  font-size: 14px;
`;
export const Title = styled.div`
  font-family: "Retro";
  font-size: 16px;
`;
export const SubTitle = styled.div`
  font-size: 13px;
`;

export const CommonBox = styled(FlexBox)`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  padding: 10px 60px;
  gap: 60px;
`;
export const ComputerImgBox = styled.div<{ src: string }>`
  width: 180px;
  height: 180px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
  position: relative;
  margin-top: 40px;
  flex-shrink: 0;
`;
export const ProfileInfo = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10px;
  font-size: 15px;
`;

export const EachInfo = styled(FlexBox)`
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;
export const Text = styled.div`
  font-weight: 600;
`;
export const SubText = styled.div`
  padding-left: 30px;
`;
