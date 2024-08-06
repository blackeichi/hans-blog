import { useSetRecoilState } from "recoil";
import {
  actionState,
  folderState,
  mouseLocaleState,
  selectedState,
  sizeState,
} from "$utils/atom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FolderComponents } from "./Components/FolderComponents";
import { TASK_ICONS } from "./constants";
import { HomeIcon } from "./Components/HomeIcon";
import { HomeOverly } from "./Components/HomeOverlay/HomeOverlay";
import { HandleActions } from "./handleActions";

interface HomeProps {
  isLoggedIn: any;
}

const withHome = (Component: any) => {
  return (props: HomeProps) => {
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
    }, []);
    return <Component props={props} />;
  };
};

const Home = withHome(({ isLoggedIn }: HomeProps) => {
  const setSelected = useSetRecoilState(selectedState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  const setAction = useSetRecoilState(actionState);
  const setSize = useSetRecoilState(sizeState);
  return (
    <>
      <HandleActions />
      <HomeOverly
        setSize={setSize}
        setSelected={setSelected}
        setAction={setAction}
      >
        {TASK_ICONS.map((item) => (
          <HomeIcon
            key={item.title}
            item={item}
            setSelected={setSelected}
            setMouseLocale={setMouseLocale}
            setAction={setAction}
            setSize={setSize}
          />
        ))}
        <FolderComponents />
      </HomeOverly>
    </>
  );
});

export default Home;
