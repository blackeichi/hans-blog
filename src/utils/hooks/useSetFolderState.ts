import { DEFAULT_SIZE, TASK_STATE } from "$routes/Home/constants";
import { TselectedIndexState, folderState, sizeState } from "$utils/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useSetFolderState = (titles: string[]) => {
  const size = useRecoilValue(sizeState);
  const setFolderState = useSetRecoilState(folderState);
  const handleSetFolder = () =>
    setFolderState((prev: TselectedIndexState) => {
      const filtered = prev.filter((value) => !titles.includes(value?.title));
      const existed = prev.filter((value) => titles.includes(value?.title));
      const lastFolder = prev[prev.length - 1];
      const newArr = [
        ...filtered,
        ...existed.map((item) => ({ ...item, state: TASK_STATE.OPEN })),
        ...titles
          .filter((title) => !existed.map((item) => item.title).includes(title))
          .map((item, index) => ({
            title: item,
            state: TASK_STATE.OPEN,
            ...(titles.length > 1
              ? {
                  x: size.width / 2 - DEFAULT_SIZE / 2 + index * 10,
                  y: size.height / 2 - DEFAULT_SIZE / 2 + index * 10,
                }
              : {
                  x: lastFolder
                    ? lastFolder.x + lastFolder.width >= size.width
                      ? lastFolder.x - 20
                      : lastFolder.x + 20
                    : size.width / 2 - DEFAULT_SIZE / 2,
                  y: lastFolder
                    ? lastFolder.y + lastFolder.height >= size.height
                      ? lastFolder.y - 20
                      : lastFolder.y + 20
                    : size.height / 2 - DEFAULT_SIZE / 2,
                }),
            width: DEFAULT_SIZE,
            height: DEFAULT_SIZE,
          })),
      ];
      return newArr;
    });
  return handleSetFolder;
};
