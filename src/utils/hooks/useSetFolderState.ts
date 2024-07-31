import { DEFAULT_SIZE, TASK_STATE } from "$routes/Home/constants";
import { folderState, selectedState, sizeState } from "$utils/atom";
import { TASK_BAR_HEIGHT } from "$utils/constans";
import { TFolderList } from "$utils/types";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const ADDITIONAL_SIZE = 35;

export const useSetFolderState = () => {
  const size = useRecoilValue(sizeState);
  const [selected, setSelected] = useRecoilState(selectedState);
  const setFolderState = useSetRecoilState(folderState);
  const handleSetFolder = () => {
    if (selected && selected.length > 0) {
      setFolderState((prev: TFolderList) => {
        const filtered = prev.filter(
          (value) => !selected.includes(value?.title)
        );
        const existed = prev.filter((value) => selected.includes(value?.title));
        const lastFolder = prev[prev.length - 1];
        const newArr = [
          ...filtered,
          ...existed.map((item) => ({ ...item, state: TASK_STATE.OPEN })),
          ...selected
            .filter(
              (title) => !existed.map((item) => item.title).includes(title)
            )
            .map((item, index) => ({
              title: item,
              isMax: false,
              state: TASK_STATE.OPEN,
              ...(selected.length > 1
                ? {
                    x:
                      size.width / 2 -
                      DEFAULT_SIZE / 2 +
                      index * ADDITIONAL_SIZE,
                    y:
                      size.height / 2 -
                      DEFAULT_SIZE / 2 +
                      index * ADDITIONAL_SIZE,
                  }
                : {
                    x: lastFolder
                      ? lastFolder.x + lastFolder.width >= size.width
                        ? lastFolder.x - ADDITIONAL_SIZE
                        : lastFolder.x + ADDITIONAL_SIZE
                      : size.width / 2 - DEFAULT_SIZE / 2,
                    y: lastFolder
                      ? lastFolder.y + lastFolder.height >=
                        size.height - TASK_BAR_HEIGHT
                        ? lastFolder.y - ADDITIONAL_SIZE
                        : lastFolder.y + ADDITIONAL_SIZE
                      : size.height / 2 - DEFAULT_SIZE / 2,
                  }),
              width: DEFAULT_SIZE,
              height: DEFAULT_SIZE,
            })),
        ];
        return newArr;
      });
      setSelected(null);
    }
    return true;
  };
  return handleSetFolder;
};
