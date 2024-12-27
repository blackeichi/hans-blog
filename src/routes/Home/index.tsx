import { useSetRecoilState } from "recoil";
import {
  actionState,
  mouseLocaleState,
  selectedState,
  sizeState,
} from "$utils/atom";
import { FolderComponents } from "./Components/FolderComponents";
import { TASK_ICONS } from "./constants";
import { HomeIcon } from "./Components/HomeIcon";
import { HomeOverly } from "./Components/HomeOverlay/HomeOverlay";
import { useHandleUserActions, useSetFolderWithStorage } from "./actions";

interface HomeProps {
  isLoggedIn: boolean;
}

const Home = ({ isLoggedIn }: HomeProps) => {
  useSetFolderWithStorage();
  useHandleUserActions();
  const setSelected = useSetRecoilState(selectedState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  const setAction = useSetRecoilState(actionState);
  const setSize = useSetRecoilState(sizeState);
  return (
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
  );
};

export default Home;
