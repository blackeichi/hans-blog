import { ButtonComponent } from "$components/ButtonComponent";
import { alertMsgState } from "$utils/atom";
import { db } from "fbase";
import { doc, setDoc } from "firebase/firestore";
import { deleteObject } from "firebase/storage";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

export const SubmitButton = ({
  navigate,
  images,
  title,
  value,
  maintag,
  tags,
}: any) => {
  const setAlertMsg = useSetRecoilState(alertMsgState);
  const onSubmit = async () => {
    if (!title || !value) {
      setAlertMsg("제목과 내용은 필수 입력입니다.");
    } else if (!maintag) {
      setAlertMsg("메인 태그 입력은 필수입니다.");
    } else {
      await setDoc(doc(db, "post", maintag), {
        title,
        value,
        tags,
      });
      await setDoc(doc(db, "tags", maintag), {
        tags,
      });
      navigate("/");
    }
  };
  return (
    <BtnWrapper>
      <BtnBox>
        <ButtonComponent
          action={async () => {
            await images.forEach((img: any) => deleteObject(img));
            navigate("/");
          }}
          content={<span>취 소</span>}
          width="60px"
          height="30px"
        />
        <ButtonComponent
          action={() => {
            onSubmit();
          }}
          content={<span>저 장</span>}
          width="60px"
          height="30px"
        />
      </BtnBox>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px;
  padding-top: 0;
  background-color: ${(props) => props.theme.gray};
  left: 0;
  bottom: 0;
  z-index: 300;
`;

const BtnBox = styled.div`
  width: 100%;
  outline: 4px solid ${(props) => props.theme.shadow};
  border: 1px solid ${(props) => props.theme.darkGray};
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  background-color: ${(props) => props.theme.lightGray};
  padding: 5px;
`;
