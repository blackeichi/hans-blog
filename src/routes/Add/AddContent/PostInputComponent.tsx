import { useState } from "react";
import { AutoCompleteComponent } from "$components/AutoCompleteComponent";
import ReactQuill from "react-quill";
import { styled } from "styled-components";
import { InputComponent } from "$routes/Home/Components/FolderComponents/WindowComponent/Components/InputComponent";

export const PostInputComponent = ({
  title,
  setTitle,
  modules,
  setValue,
  quillRef,
  mainTagOptions,
  setMainTagOptions,
  maintag,
  setMainTag,
  tags,
  setTags,
}: any) => {
  const [tag, setTag] = useState("");
  const registerTag = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!tags.includes(tag) && tag) {
      setTags((prev: string[]) => [...prev, tag]);
    }
    setTag("");
  };
  return (
    <Content>
      <TitleInputBox>
        <TitleInput
          id="title"
          required
          placeholder="제 목"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {maintag.length > 0 && (
          <MainTag
            onClick={() => {
              setMainTag([]);
              setTags([]);
            }}
          >
            {maintag[0]}
          </MainTag>
        )}
      </TitleInputBox>
      {maintag.length < 1 ? (
        <AutoCompleteComponent
          id="mainTags"
          value={maintag}
          label="메인 태그"
          onChange={(data: string[]) => setMainTag(data)}
          onChangeOptions={setMainTagOptions}
          options={mainTagOptions}
          width="100%"
        />
      ) : (
        <TagBox>
          <TagForm onSubmit={registerTag}>
            <InputComponent
              name="id"
              placeholder="Enter를 누르면 태그가 등록됩니다."
              noLabel
              text={tag}
              setText={setTag}
              width="100%"
            />
          </TagForm>
          {tags.map((t: string) => (
            <Tag
              onClick={() =>
                setTags((prev: string[]) => prev.filter((item) => item !== t))
              }
              key={t}
            >
              {t}
            </Tag>
          ))}
        </TagBox>
      )}
      <ReactQuill modules={modules} onChange={setValue} ref={quillRef} />
    </Content>
  );
};

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
const TitleInputBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  padding-right: 50px;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-left: 1px solid ${(props) => props.theme.gray};
  border-right: 1px solid ${(props) => props.theme.gray};
  font-size: 17px;
  font-weight: bold;
`;
const MainTag = styled.div`
  position: absolute;
  padding: 10px 5px;
  right: 5px;
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.lightGray};
  border-radius: 20px;
  font-family: "Retro";
  font-size: 9px;
  cursor: pointer;
`;
const TagBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0 5px;
  padding-bottom: 10px;
  border-left: 1px solid ${(props) => props.theme.gray};
  border-right: 1px solid ${(props) => props.theme.gray};
`;
const Tag = styled.div`
  padding: 5px 10px;
  background-color: ${(props) => props.theme.darkGray};
  color: ${(props) => props.theme.lightGray};
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
`;
const TagForm = styled.form`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
`;
