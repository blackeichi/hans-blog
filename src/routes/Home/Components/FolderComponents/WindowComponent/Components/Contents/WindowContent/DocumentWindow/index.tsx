import { GLOBAL_COLOR } from "$utils/constants";
import { styled } from "styled-components";
import { IconComponent } from "$components/IconComponent";
import { useGetPosts } from "$routes/Home/actions";

export const DocumentWindow = () => {
  const posts = useGetPosts();
  return (
    <>
      {Object.keys(posts).length > 0 &&
        Object.keys(posts).map((item) => (
          <IconComponent
            onClick={() => {}}
            onContextMenu={() => {}}
            onDoubleClick={() => {}}
            isSelected={false}
            icon={"/images/file.png"}
            width="25px"
            title={item}
            color={GLOBAL_COLOR.darkGray}
            size="9px"
          />
        ))}
    </>
  );
};

const FileIcon = styled.img`
  height: 100%;
`;
