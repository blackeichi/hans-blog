import { DEFAULT_SIZE, TASK_STATE } from "$routes/Home/constants";
import { TselectedIndexState, folderState } from "$utils/atom";
import { useSetRecoilState } from "recoil";

export const useSetFolderState = (
  titles: string[],
  screen: { innerWidth: number; innerHeight: number }
) => {
  const setFolderState = useSetRecoilState(folderState);
  const handleSetFolder = () =>
    setFolderState((prev: TselectedIndexState) => {
      const filtered = prev.filter((value) => !titles.includes(value?.title));
      const isExisted = prev.filter((value) => titles.includes(value?.title));
      const lastFolder = prev[prev.length - 1];
      const newArr = [
        ...filtered,
        ...isExisted.map((item) => ({ ...item, state: TASK_STATE.OPEN })),
        ...titles
          .filter(
            (title) => !isExisted.map((item) => item.title).includes(title)
          )
          .map((item, index) => ({
            title: item,
            state: TASK_STATE.OPEN,
            ...(titles.length > 1
              ? {
                  x: screen.innerWidth / 2 - DEFAULT_SIZE / 2 + index * 10,
                  y: screen.innerHeight / 2 - DEFAULT_SIZE / 2 + index * 10,
                }
              : {
                  x: lastFolder
                    ? lastFolder.x + lastFolder.width >= screen.innerWidth
                      ? lastFolder.x - 20
                      : lastFolder.x + 20
                    : screen.innerWidth / 2 - DEFAULT_SIZE / 2,
                  y: lastFolder
                    ? lastFolder.y + lastFolder.height >= screen.innerHeight
                      ? lastFolder.y - 20
                      : lastFolder.y + 20
                    : screen.innerHeight / 2 - DEFAULT_SIZE / 2,
                }),
            width: DEFAULT_SIZE,
            height: DEFAULT_SIZE,
          })),
      ];
      return newArr;
    });
  return handleSetFolder;
};
