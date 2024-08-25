import { AutoCompleteComponent } from "$components/AutoCompleteComponent";
import { db } from "fbase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
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
  const [selectedMainTag, setSelectedMainTag] = useState<string[]>([]);
  const [mainTagOptions, setMainTagOptions] = useState<string[]>([]);
  const getDatas = async () => {
    const querySnapshot = await getDocs(collection(db, "post"));
    let opList: string[] = [];
    querySnapshot.forEach((doc) => opList.push(doc.id));
    setMainTagOptions(opList);
  };
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <Content>
      <TitleInput
        id="title"
        required
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <AutoCompleteComponent
        id="mainTags"
        value={selectedMainTag}
        label="메인 태그"
        onChange={(data: string[]) => setSelectedMainTag(data)}
        onChangeOptions={setMainTagOptions}
        options={mainTagOptions}
        width="100%"
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
  padding-right: 50px;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-left: 1px solid ${(props) => props.theme.gray};
  border-right: 1px solid ${(props) => props.theme.gray};
  font-size: 17px;
  font-weight: bold;
`;
const TagInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${(props) => props.theme.gray};
  border-bottom: none;
`;
