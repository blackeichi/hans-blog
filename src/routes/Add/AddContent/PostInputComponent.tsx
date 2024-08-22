import ReactQuill from "react-quill";
import { styled } from "styled-components";

export const PostInputComponent = ({
  title,
  setTitle,
  modules,
  setValue,
  quillRef,
}: {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  modules: any;
  quillRef: any;
}) => {
  return (
    <Content>
      <TitleInput
        id="title"
        required
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
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
const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-left: 1px solid ${(props) => props.theme.gray};
  border-right: 1px solid ${(props) => props.theme.gray};
`;
