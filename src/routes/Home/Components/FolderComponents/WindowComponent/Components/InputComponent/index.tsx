import { styled } from "styled-components";

interface InputComponentProps {
  placeholder: string;
  type?: string;
  name: string;
  text: string;
  width?: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  noLabel?: Boolean;
}

export const InputComponent = ({
  placeholder,
  type = "text",
  name,
  text,
  width = "250px",
  setText,
  noLabel = false,
}: InputComponentProps) => {
  return (
    <InputComponentContainer width={width}>
      {!noLabel && <Placeholder>{placeholder}</Placeholder>}
      <InputBox>
        <Input
          name={name}
          type={type}
          value={text}
          placeholder={noLabel ? placeholder : ""}
          onChange={(event) => setText(event.target.value)}
        />
      </InputBox>
    </InputComponentContainer>
  );
};

const InputComponentContainer = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 5px;
  width: ${(props) => props.width};
`;
const Placeholder = styled.div`
  font-size: 13px;
`;
const InputBox = styled.div`
  position: relative;
  height: 28px;
  width: 100%;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  border-top: 2px solid ${(props) => props.theme.darkGray};
  border-left: 2px solid ${(props) => props.theme.darkGray};
  border-bottom: 2px solid ${(props) => props.theme.lightGray};
  border-right: 2px solid ${(props) => props.theme.lightGray};
  box-sizing: border-box;
`;
