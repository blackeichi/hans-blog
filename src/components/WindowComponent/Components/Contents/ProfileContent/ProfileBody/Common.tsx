import { styled } from "styled-components";
import { FlexBox } from "styles";

const Common = () => {
  return (
    <CommonBox>
      <ComputerImgBox src="/images/computer.png" />
      <ProfileInfo>
        <EachInfo>
          <Text>Profile : </Text>
          <SubText>한정우 (남)</SubText>
          <SubText>1995. 06. 13</SubText>
        </EachInfo>
      </ProfileInfo>
    </CommonBox>
  );
};
export default Common;
const CommonBox = styled(FlexBox)`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  padding: 10px 60px;
  gap: 60px;
`;
const ComputerImgBox = styled.div<{ src: string }>`
  width: 180px;
  height: 180px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
  position: relative;
  margin-top: 40px;
  flex-shrink: 0;
`;
const ProfileInfo = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10px;
  font-size: 15px;
`;

const EachInfo = styled(FlexBox)`
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;
const Text = styled.div`
  font-weight: 600;
`;
const SubText = styled.div`
  padding-left: 30px;
`;
