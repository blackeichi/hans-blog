import { styled } from "styled-components";

interface InputComponentProps {
  placeholder: string;
  type?: string;
  name: string;
  text: string;
  width?: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const InputComponent = ({
  placeholder,
  type = "text",
  name,
  text,
  width = "250px",
  setText,
}: InputComponentProps) => {
  return (
    <InputComponentContainer>
      <Placeholder>{placeholder}</Placeholder>
      <InputBox width={width}>
        <Input
          name={name}
          type={type}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </InputBox>
    </InputComponentContainer>
  );
};

const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Placeholder = styled.div`
  font-size: 13px;
  font-weight: 600;
`;
const InputBox = styled.div<{ width: string }>`
  position: relative;
  height: 23px;
  width: ${(props) => props.width};
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
`;
