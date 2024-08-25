import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { storage } from "fbase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { alertMsgState } from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { AddContent } from "./AddContent";

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
  const [images, setImages] = useState<any[]>([]);
  const handleImageUpload = useCallback(
    async (file: File | null) => {
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
    },
    [quillRef]
  );
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
  const [pageSize, setPageSize] = useState<number>(window.innerWidth);
  const handleResize = () => {
    setPageSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AddContent
      navigate={navigate}
      modules={modules}
      quillRef={quillRef}
      pageSize={pageSize}
      images={images}
    />
  );
};

export default Add;
