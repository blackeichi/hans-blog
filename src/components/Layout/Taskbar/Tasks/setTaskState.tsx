import { folderState } from "$utils/atom";
import { TTaskState } from "$utils/types";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const SetTaskState = ({
  taskState,
  setTaskState,
}: {
  taskState: TTaskState[];
  setTaskState: React.Dispatch<React.SetStateAction<TTaskState[]>>;
}) => {
  const folders = useRecoilValue(folderState);
  const lastFolder = folders[folders.length - 1];
  useEffect(() => {
    if (lastFolder) {
      const taskList = taskState.map((item) => item.title);
      if (taskList.includes(lastFolder.title)) {
        setTaskState((prev) =>
          prev.map((item) => ({
            ...item,
            isMain: item.title === lastFolder.title ? true : false,
          }))
        );
      } else {
        setTaskState((prev) => [
          ...prev.map((item) => ({ ...item, isMain: false })),
          {
            title: lastFolder.title,
            isMain: true,
          },
        ]);
      }
    }
  }, [lastFolder]);
  useEffect(() => {
    if (folders.length !== taskState.length) {
      const folderList = folders.map((item) => item.title);
      setTaskState((prev) =>
        prev.filter((item) => folderList.includes(item.title))
      );
    }
  }, [folders]);
  return <></>;
};
