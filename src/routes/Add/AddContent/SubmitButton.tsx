import styled from "styled-components";

export const SubmitButton = () => {
  const onSubmit = async () => {
    await setDoc(doc(db, "post", "LA"), {
      title,
      state: "CA",
      country: "USA",
    });
  };
  return (
    <BtnWrapper>
      <BtnBox>
        <ButtonComponent
          action={async () => {
            images.forEach((img) => deleteObject(img));
            navigate("/");
          }}
          content={<span>취 소</span>}
          width="60px"
          height="30px"
        />
        <ButtonComponent
          action={() => {
            navigate("/");
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
