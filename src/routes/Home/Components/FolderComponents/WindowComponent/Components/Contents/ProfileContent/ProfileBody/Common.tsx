import {
  CommonBox,
  ComputerImgBox,
  EachInfo,
  ProfileInfo,
  SubText,
  Text,
} from "../styles";

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
