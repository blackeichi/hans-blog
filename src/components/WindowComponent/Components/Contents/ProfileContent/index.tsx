import { WindowContentBox } from "$components/WindowComponent/styles";
import { useState } from "react";
import styled from "styled-components";

export const ProfileContent = () => {
  const [selectedMenu, setSelectedMenu] = useState<1 | 2>(1);
  return (
    <ProfileContentBox>
      <ProfileMenuBox>
        <ProfileMenu
          isSelected={selectedMenu === 1}
          onClick={() => setSelectedMenu(1)}
        >
          일반
        </ProfileMenu>
        <ProfileMenu
          isSelected={selectedMenu === 2}
          onClick={() => setSelectedMenu(2)}
        >
          장치 관리자
        </ProfileMenu>
      </ProfileMenuBox>
      <ProfileDataBox></ProfileDataBox>
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
  font-size: 12px;
  :first-child {
    border-left: 3px solid ${(props) => props.theme.lightGray};
  }
`;
const ProfileMenu = styled.div<{ isSelected: boolean }>`
  width: 90px;
  height: ${(props) => (props.isSelected ? "33px" : "30px")};
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top: 3px solid ${(props) => props.theme.lightGray};
  border-right: 3px solid ${(props) => props.theme.shadow};
  border-bottom: 3px solid ${(props) => props.theme.gray};
  margin-top: ${(props) => (props.isSelected ? "0px" : "3px")};
  z-index: ${(props) => (props.isSelected ? 2 : 0)};
`;
const ProfileDataBox = styled.div`
  width: 100%;
  height: 100%;
  border-top: 3px solid ${(props) => props.theme.lightGray};
  border-left: 3px solid ${(props) => props.theme.lightGray};
  border-right: 3px solid ${(props) => props.theme.shadow};
  border-bottom: 3px solid ${(props) => props.theme.shadow};
  z-index: 1;
  padding: 10px;
  overflow: scroll;
`;
