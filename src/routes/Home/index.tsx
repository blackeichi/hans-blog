import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { folderState, mouseLocaleState, selectedState } from "$utils/atom";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { FolderComponents } from "./Components/FolderComponents";
import { TASK_ICONS } from "./constants";
import { HomeIcon } from "./Components/HomeIcon";
import { HomeOverly } from "./Components/HomeOverlay/HomeOverlay";

const withHome = (Component: any) => {
  return () => {
    const [ready, setReady] = useState(false);
    const setFolderState = useSetRecoilState(folderState);
    const { search } = useLocation();
    const searchData = Object.fromEntries(new URLSearchParams(search));
    const folderData = searchData?.folder
      ? JSON.parse(searchData?.folder)
      : null;
    useEffect(() => {
      if (folderData) {
        setFolderState(folderData);
      }
      setReady(true);
    }, []);
    return ready ? <Component /> : <></>;
  };
};

const Home = withHome(() => {
  const setSelected = useSetRecoilState(selectedState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  return (
    <>
      {
        <HomeOverly setSelected={setSelected}>
          {TASK_ICONS.map((item) => (
            <HomeIcon
              key={item.title}
              item={item}
              setSelected={setSelected}
              setMouseLocale={setMouseLocale}
            />
          ))}
          <FolderComponents />
        </HomeOverly>
      }
    </>
  );
});

export default Home;
