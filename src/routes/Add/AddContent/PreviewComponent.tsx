import { styled } from "styled-components";
import DOMPurify from "dompurify";
import { memo } from "react";

export const PreviewComponent = memo(({ value }: { value: string }) => {
  return (
    <PreviewWrapper
      className="ql-editor"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}
    ></PreviewWrapper>
  );
});

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
