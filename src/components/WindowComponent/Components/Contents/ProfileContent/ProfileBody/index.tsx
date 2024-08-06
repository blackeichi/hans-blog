import { styled } from "styled-components";
import { Common } from "./Common";
import { System } from "./System";

export const ProfileBody = ({ selectedMenu }: { selectedMenu: number }) => {
  return (
    <ProfileBodyWrapper>
      {selectedMenu === 1 ? <Common /> : <System />}
    </ProfileBodyWrapper>
  );
};

const ProfileBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
