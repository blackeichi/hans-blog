import { useState } from "react";
import { InputComponent } from "$components/WindowComponent/Components/InputComponent";
import { styled } from "styled-components";
import { FlexBox } from "styles";
import { useSetRecoilState } from "recoil";
import { alertMsgState } from "$utils/atom";

export const System = () => {
  const setAlertMsg = useSetRecoilState(alertMsgState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const handleSubmit = () => {
    if (!username) {
      setAlertMsg("이름을 입력해주세요.");
    }
  };
  return (
    <SystemWrapper>
      <Img src="/images/registerImg.png" />
      <ColBox as="form" onSubmit={handleSubmit}>
        <Title>LOGIN</Title>
        <SubTitle>
          아래에 이름과 비밀번호를 입력하십시오. 코드는 원하는 경우에만
          입력하십시오.
        </SubTitle>
        <InputComponent
          name="id"
          placeholder="이 름 :"
          text={username}
          setText={setUsername}
        />
        <InputComponent
          name="password"
          placeholder="비 밀 번 호 :"
          type="password"
          text={password}
          setText={setPassword}
        />
        <InputComponent
          name="code"
          placeholder="코드"
          type="password"
          text={code}
          setText={setCode}
        />
      </ColBox>
    </SystemWrapper>
  );
};

const SystemWrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 30px 0;
`;
const Img = styled.div<{ src: string }>`
  width: 220px;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
`;
const Title = styled.div`
  font-family: "Retro";
  font-size: 25px;
`;
const SubTitle = styled.div``;
const ColBox = styled(FlexBox)`
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;
