import { db } from "fbase";
import { collection, getDocs } from "firebase/firestore";
import { FIRE_STORE_POSTS, GLOBAL_COLOR } from "$utils/constants";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { IconComponent } from "$components/IconComponent";

export const DocumentWindow = () => {
  const [posts, setPosts] = useState<any>({});
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, FIRE_STORE_POSTS));
    let data: any = {};
    querySnapshot.forEach((doc) => {
      data = { ...data, ...doc.data() };
    });
    setPosts(data);
  };
  useEffect(() => {
    getData();
  }, []);
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
