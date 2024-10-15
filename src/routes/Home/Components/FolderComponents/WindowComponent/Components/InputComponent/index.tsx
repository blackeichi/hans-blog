import {
  Input,
  InputBox,
  InputComponentContainer,
  Placeholder,
} from "../../styles";

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
