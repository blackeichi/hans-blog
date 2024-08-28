import { useEffect } from "react";
import { actionState, selectedState } from "$utils/atom";
import { useRecoilState } from "recoil";
import { useSetFolderState } from "$utils/hooks/useSetFolderState";
import { ACTION_TYPES, TASK_LIST } from "./constants";
import { KEY_EVENTS } from "$utils/constants";

export const HandleActions = () => {
  const [action, setAction] = useRecoilState(actionState);
  const [selected, setSelected] = useRecoilState(selectedState);
  const onSetOpenFolders = useSetFolderState();
  useEffect(() => {
    if (action) {
      if (action?.type === ACTION_TYPES.OPEN_FOLDER) {
        const res = onSetOpenFolders();
        if (res) {
          setAction(null);
        }
      }
      if (action?.type === ACTION_TYPES.HOME_KEY_DOWN) {
        if (
          action.value === KEY_EVENTS.ENTER &&
          selected &&
          selected?.length > 0
        ) {
          const res = onSetOpenFolders();
          if (res) {
            setAction(null);
          }
        } else if (action.value === KEY_EVENTS.ARROW_DOWN) {
          if (!selected || selected.length === 0) {
            setSelected([TASK_LIST.Profile]);
          } else {
            const list = Object.keys(TASK_LIST);
            const index = list.indexOf(selected[0]);
            if (index === list.length - 1) {
              setSelected([TASK_LIST.Profile]);
            } else {
              setSelected([TASK_LIST[list[index + 1]]]);
            }
          }
        } else if (action.value === KEY_EVENTS.ARROW_UP) {
          if (!selected || selected.length === 0) {
            setSelected([TASK_LIST.Search]);
          } else {
            const list = Object.keys(TASK_LIST);
            const index = list.indexOf(selected[0]);
            if (index === 0) {
              setSelected([TASK_LIST.Search]);
            } else {
              setSelected([TASK_LIST[list[index - 1]]]);
            }
          }
        }
      }
    }
  }, [action]);
  return <></>;
};
