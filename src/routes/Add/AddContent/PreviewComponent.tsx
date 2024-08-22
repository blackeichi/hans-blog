import { styled } from "styled-components";
import sanitizeHtml from "sanitize-html";
import { ALLOWED_QUILL } from "$utils/constans";

export const PreviewComponent = ({ value }: { value: string }) => {
  const cleanedValue = sanitizeHtml(value, ALLOWED_QUILL);
  console.log(value, cleanedValue);
  return (
    <PreviewWrapper
      className="ql-editor"
      dangerouslySetInnerHTML={{ __html: cleanedValue }}
    ></PreviewWrapper>
  );
};

const PreviewWrapper = styled.div`
  width: 50%;
  flex-shrink: 0;
  height: 100%;
  background-color: white;
  border-top: 1px solid ${(props) => props.theme.darkGray};
  padding: 5px;
  outline: 4px solid ${(props) => props.theme.shadow};
  overflow-x: scroll;
`;
