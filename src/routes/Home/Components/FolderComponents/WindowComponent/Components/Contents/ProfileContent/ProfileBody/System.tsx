import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { alertMsgState, isLoggedInState } from "$utils/atom";
import { ButtonComponent } from "$components/ButtonComponent";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "fbase";
import { InputComponent } from "../../../InputComponent";
import { returnVerify } from "$routes/Home/utils";
import { ColBox, Img, SubTitle, SystemWrapper, Title } from "../styles";

const System = () => {
  const setAlertMsg = useSetRecoilState(alertMsgState);
  const isLoggedIn = useRecoilValue<boolean>(isLoggedInState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!username) {
        setAlertMsg("이름을 입력해주세요.");
      } else if (!password) {
        setAlertMsg("비밀번호를 입력해주세요.");
      } else if (!returnVerify(code)) {
        setAlertMsg("옳바르지 않은 접근입니다.");
      } else {
        await signInWithEmailAndPassword(auth, username, password);
        setUsername("");
        setPassword("");
        setCode("");
      }
    } catch (error) {
      setAlertMsg("이름 또는 비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <SystemWrapper>
      <Img src="/images/registerImg.png" />
      {isLoggedIn ? (
        <ColBox
          style={{
            width: "470px",
            alignItems: "center",
          }}
        >
          <ButtonComponent
            content={<span>로 그 아 웃</span>}
            action={async () => {
              await signOut(auth);
            }}
            width="200px"
            height="60px"
            styles={{
              marginBottom: "150px",
            }}
          />
        </ColBox>
      ) : (
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
      )}
    </SystemWrapper>
  );
};
export default System;
