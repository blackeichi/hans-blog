import { WindowContentBox } from "$components/WindowComponent/styles";
import { useState } from "react";
import styled from "styled-components";
import { ProfileBody } from "./ProfileBody";

export const ProfileContent = () => {
  const [selectedMenu, setSelectedMenu] = useState<1 | 2>(1);
  return (
    <ProfileContentBox>
      <ProfileMenuBox>
        <ProfileMenu
          isSelected={selectedMenu === 1}
          onClick={() => setSelectedMenu(1)}
        >
          <MenuName isSelected={selectedMenu === 1}>일반</MenuName>
        </ProfileMenu>
        <ProfileMenu
          isSelected={selectedMenu === 2}
          onClick={() => setSelectedMenu(2)}
        >
          <MenuName isSelected={selectedMenu === 2}>장치 관리자</MenuName>
        </ProfileMenu>
      </ProfileMenuBox>
      <ProfileDataBox>
        <ProfileBody />
      </ProfileDataBox>
    </ProfileContentBox>
  );
};

const ProfileContentBox = styled(WindowContentBox)`
  display: flex;
  flex-direction: column;
`;
const ProfileMenuBox = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  font-size: 11px;
`;
const ProfileMenu = styled.div<{ isSelected: boolean }>`
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
const MenuName = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 2px;
  border: ${(props) => (props.isSelected ? "1px dotted black" : "none")};
`;
const ProfileDataBox = styled.div`
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
