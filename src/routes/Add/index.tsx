import { ButtonComponent } from "$components/ButtonComponent";
import {
  CloseIcon,
  Title,
  WindowBox,
  WindowContentBox,
  WindowTitleBox,
} from "$components/WindowComponent/styles";
import { useEffect, useMemo, useState, useRef } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FlexBox } from "styles";
import { storage } from "fbase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { alertMsgState } from "$utils/atom";
import { useSetRecoilState } from "recoil";

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
  const setAlertMsg = useSetRecoilState(alertMsgState);
  const quillRef = useRef<ReactQuill>(null);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const handleImageUpload = async (file: File | null) => {
    if (!file) {
      setAlertMsg("파일이 선택되지 않았습니다.");
      return;
    } else {
      if (quillRef.current) {
        try {
          const storageRef = ref(storage, `post/${new Date().getTime()}`);
          const result = await uploadBytes(storageRef, file);
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection(true);
          if (range && result) {
            setImages((prev) => [...prev, storageRef]);
            getDownloadURL(storageRef)
              .then((url) => {
                editor.insertEmbed(range.index, "image", url);
              })
              .catch((e) => console.log(e));
          } else {
            setAlertMsg("옳바르지 않은 시도입니다.");
          }
        } catch (e) {
          setAlertMsg(
            "이미지 업로드가 실패하였습니다. 잠시 후 다시 시도해주세요."
          );
        }
      }
    }
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ["small", false, "large", "huge"] }],
          ["image"],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
        handlers: {
          image: () => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.addEventListener("change", () => {
              // 파일을 하나씩 업로드
              const file = input.files && input.files[0];
              handleImageUpload(file);
            });
            input.click();
          },
        },
      },
    };
  }, []);
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
