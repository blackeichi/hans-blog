import { ButtonComponent } from "$components/ButtonComponent";
import {
  CloseIcon,
  Title,
  WindowBox,
  WindowContentBox,
  WindowTitleBox,
} from "$routes/Home/Components/FolderComponents/WindowComponent/styles";
import { useState } from "react";
import { styled } from "styled-components";
import { FlexBox } from "styles";
import { PostInputComponent } from "./PostInputComponent";
import { PreviewComponent } from "./PreviewComponent";
import { SubmitButton } from "./SubmitButton";

export const AddContent = ({
  navigate,
  modules,
  quillRef,
  pageSize,
  images,
  mainTagOptions,
  setMainTagOptions,
}: any) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [maintag, setMainTag] = useState<string[]>([]);
  const [tags, setTags] = useState([]);
  return (
    <AddWrapper>
      <WindowBox
        index={0}
        style={{
          textShadow: "none",
        }}
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
            display: "flex",
          }}
        >
          <PostInputComponent
            title={title}
            setTitle={setTitle}
            modules={modules}
            setValue={setValue}
            quillRef={quillRef}
            mainTagOptions={mainTagOptions}
            setMainTagOptions={setMainTagOptions}
            maintag={maintag}
            setMainTag={setMainTag}
            tags={tags}
            setTags={setTags}
          />
          {pageSize >= 800 && <PreviewComponent value={value} />}
        </WindowContentBox>
      </WindowBox>
      <SubmitButton
        images={images}
        navigate={navigate}
        title={title}
        value={value}
        maintag={maintag}
        tags={tags}
      />
    </AddWrapper>
  );
};

const AddWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  z-index: 200;
`;
