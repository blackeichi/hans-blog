import { styled } from "styled-components";

export const Common = () => {
  return (
    <>
      <ComputerImgBox src="/images/computer.png">
        <ProfileImageBox>
          <ProfileImage src="/images/amIcute.png" />
        </ProfileImageBox>
      </ComputerImgBox>
      <ProfileInfo></ProfileInfo>
    </>
  );
};

const ComputerImgBox = styled.div<{ src: string }>`
  width: 200px;
  height: 200px;
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
  left: 20px;
  top: 23px;
  width: 160px;
  height: 115px;
`;
const ProfileImage = styled.div<{ src: string }>`
  width: 100%;
  height: 150px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
`;
const ProfileInfo = styled.div`
  width: 100%;
`;
