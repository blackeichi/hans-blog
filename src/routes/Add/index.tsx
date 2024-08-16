import { ButtonComponent } from "$components/ButtonComponent";
import {
  CloseIcon,
  Title,
  WindowBox,
  WindowContentBox,
  WindowTitleBox,
} from "$components/WindowComponent/styles";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FlexBox } from "styles";

interface AddProps {
  isLoggedIn: boolean;
}

const Add = ({ isLoggedIn }: AddProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <AddWrapper>
      <WindowBox
        index={0}
        item={{
          isMax: true,
          x: 0,
          y: 0,
        }}
      >
        <WindowTitleBox>
          <Title>생 성</Title>
          <FlexBox>
            <ButtonComponent
              width="16px"
              height="16px"
              content={<CloseIcon>x</CloseIcon>}
              action={() => navigate("/")}
            />
          </FlexBox>
        </WindowTitleBox>
        <WindowContentBox
          style={{
            height: "calc(100% - 35px)",
            paddingTop: "10px",
          }}
        >
          <Content>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </Content>
        </WindowContentBox>
      </WindowBox>
    </AddWrapper>
  );
};

export default Add;

const AddWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-top: 1px solid ${(props) => props.theme.darkGray};
  border-left: 1px solid ${(props) => props.theme.darkGray};
  outline: 4px solid ${(props) => props.theme.shadow};
  overflow-x: scroll;
  position: relative;
`;
