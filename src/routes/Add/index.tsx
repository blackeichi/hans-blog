import { ButtonComponent } from "$components/ButtonComponent";
import {
  CloseIcon,
  Title,
  WindowBox,
  WindowContentBox,
  WindowTitleBox,
} from "$components/WindowComponent/styles";
import { useEffect } from "react";
import { useQuill } from "react-quilljs";
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
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML("<h1>React Hook for Quill!</h1>");
    }
  }, [quill]);
  return (
    <>
      <div style={{ width: "500px", height: "500px", zIndex: 100 }}>
        <div ref={quillRef} />
      </div>
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
            paddingTop: "15px",
          }}
        >
          <Content></Content>
        </WindowContentBox>
      </WindowBox>
    </>
  );
};

export default Add;

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
