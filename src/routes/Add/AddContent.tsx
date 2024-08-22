import { ButtonComponent } from "$components/ButtonComponent";
import {
  CloseIcon,
  Title,
  WindowBox,
  WindowContentBox,
  WindowTitleBox,
} from "$routes/Home/Components/FolderComponents/WindowComponent/styles";
import { useState } from "react";
import ReactQuill from "react-quill";
import { styled } from "styled-components";
import { FlexBox } from "styles";

export const AddContent = ({
  navigate,
  modules,
  quillRef,
}: {
  navigate: any;
  modules: any;
  quillRef: any;
}) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
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
            <TitleInput
              id="title"
              required
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <ReactQuill
              modules={modules}
              onChange={setValue}
              style={{
                height: "calc(100% - 42px)",
                textShadow: "none",
              }}
              ref={quillRef}
            />
          </Content>
        </WindowContentBox>
      </WindowBox>
    </AddWrapper>
  );
};

const AddWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: calc(100vh - 30px);
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
const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border: none;
`;
