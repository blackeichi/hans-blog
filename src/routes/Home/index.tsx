import { useState } from "react";
import { styled } from "styled-components";
import { TASK_ICONS } from "./constants";
import { useSetRecoilState } from "recoil";
import { folderState, mouseLocaleState, selectedState } from "$utils/atom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { FolderComponents } from "./Components/FolderComponents";
import { HomeIcon } from "./Components/HomeIcon";

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
  const setSelected = useSetRecoilState(selectedState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  return (
    <HomeContainer tabIndex={0} onKeyDown={(event) => console.log(event)}>
      {TASK_ICONS.map((item) => (
        <HomeIcon
          key={item.title}
          item={item}
          setSelected={setSelected}
          setMouseLocale={setMouseLocale}
        />
      ))}
      <FolderComponents />
    </HomeContainer>
  );
});

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 15px 0;
  width: 100%;
  height: 100%;
  outline: none;
`;
