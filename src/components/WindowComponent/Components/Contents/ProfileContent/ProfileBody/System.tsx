import { useState } from "react";
import { InputComponent } from "$components/WindowComponent/Components/InputComponent";
import { styled } from "styled-components";
import { FlexBox } from "styles";
import { useSetRecoilState } from "recoil";
import { alertMsgState } from "$utils/atom";
import { ButtonComponent } from "$components/ButtonComponent";

const System = () => {
  const setAlertMsg = useSetRecoilState(alertMsgState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!username) {
      setAlertMsg("이름을 입력해주세요.");
    } else if (!password) {
      setAlertMsg("비밀번호를 입력해주세요.");
    } else if (code !== process.env.REACT_APP_CODE) {
      setAlertMsg("옳바르지 않은 접근입니다.");
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
        <ButtonComponent
          content={<span>확 인</span>}
          action={() => {}}
          width="60px"
          height="35px"
          type="submit"
          styles={{
            marginTop: "10px",
          }}
        />
      </ColBox>
    </SystemWrapper>
  );
};
export default System;
const SystemWrapper = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 15px 0;
`;
const Img = styled.div<{ src: string }>`
  width: 220px;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
`;
const ColBox = styled(FlexBox)`
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15px;
  padding-right: 30px;
  font-size: 14px;
`;
const Title = styled.div`
  font-family: "Retro";
  font-size: 16px;
`;
const SubTitle = styled.div`
  font-size: 13px;
`;
