import { TASK_STATE } from "$routes/Home/constants";
import { folderState } from "$utils/atom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const SetTaskState = ({
  taskState,
  setTaskState,
  mainTask,
  setMainTask,
}: {
  taskState: string[];
  setTaskState: React.Dispatch<React.SetStateAction<string[]>>;
  mainTask: string;
  setMainTask: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const folders = useRecoilValue(folderState);
  useEffect(() => {
    if (folders && folders.length > 0) {
      if (folders.length !== taskState.length) {
        // 폴더 add or close
        const folderList = folders.map((item) => item.title);
        if (folders.length > taskState.length) {
          // 새로운 folder가 추가된 경우
          const addedFolders = folders
            .filter((folder) => !taskState.includes(folder.title))
            .map((item) => item.title);
          setTaskState((prev) => [...prev, ...addedFolders]);
          setMainTask(addedFolders[addedFolders.length - 1]);
        } else {
          const filteredTasks = taskState.filter((item) =>
            folderList.includes(item)
          );
          setTaskState(filteredTasks);
          setMainTask(filteredTasks[filteredTasks.length - 1]);
        }
      } else {
        // 제일 상단의 폴더가 변경되었을 때
        for (let i = 1; i <= folders.length; i++) {
          const lastFolder = folders[folders.length - i];
          if (lastFolder.state === TASK_STATE.HIDE) {
            continue;
          } else {
            if (lastFolder && mainTask !== lastFolder.title) {
              setMainTask(lastFolder.title);
            }
            break;
          }
        }
      }
    } else {
      setTaskState([]);
    }
  }, [folders]);
  return <></>;
};
