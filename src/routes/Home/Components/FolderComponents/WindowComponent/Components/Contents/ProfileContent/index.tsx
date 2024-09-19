import { useState } from "react";
import { ProfileBody } from "./ProfileBody";
import {
  MenuName,
  ProfileContentBox,
  ProfileDataBox,
  ProfileMenu,
  ProfileMenuBox,
} from "./styles";

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
        <ProfileBody selectedMenu={selectedMenu} />
      </ProfileDataBox>
    </ProfileContentBox>
  );
};
