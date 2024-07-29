import { useState } from "react";
import { HomeIcon } from "$components/HomeIcon";
import { styled } from "styled-components";
import { TASK_ICONS } from "./constants";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { folderState } from "$utils/atom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { FolderComponents } from "./Components/FolderComponents";

const withHome = (Component: any) => {
  return () => {
    const [ready, setReady] = useState(false);
    const setFolderState = useSetRecoilState(folderState);
    const [searchParams] = useSearchParams();
    const folderData = searchParams.get("folder")
      ? JSON.parse(searchParams.get("folder") || "")
      : [];
    useEffect(() => {
      setFolderState(folderData);
      setReady(true);
    }, []);
    return ready ? <Component /> : <></>;
  };
};

const Home = withHome(() => {
  const folders = useRecoilValue(folderState);
  const [_, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({
      folder: `${JSON.stringify(folders)}`,
    });
  }, [folders]);
  return (
    <HomeContainer>
      {TASK_ICONS.map((item) => (
        <HomeIcon key={item.title} item={item} />
      ))}
      {<FolderComponents folders={folders} />}
    </HomeContainer>
  );
});

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 15px 0;
`;
