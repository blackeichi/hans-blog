import { styled } from "styled-components";

export const ProfileBody = () => {
  return (
    <ProfileBodyWrapper>
      <ComputerImgBox src="/images/computer.png">
        <ProfileImageBox>
          <ProfileImage src="/images/amIcute.png" />
        </ProfileImageBox>
      </ComputerImgBox>
      <ProfileInfo></ProfileInfo>
    </ProfileBodyWrapper>
  );
};

const ProfileBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;
const ComputerImgBox = styled.div<{ src: string }>`
  width: 250px;
  height: 250px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
  position: relative;
`;
const ProfileImageBox = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.green};
  display: flex;
  align-items: center;
  justify-content: center;
  left: 25px;
  top: 30px;
  width: 200px;
  height: 145px;
`;
const ProfileImage = styled.div<{ src: string }>`
  width: 190px;
  height: 190px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
`;
const ProfileInfo = styled.div`
  width: 100%;
`;
