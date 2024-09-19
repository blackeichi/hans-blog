import { useEffect, useState } from "react";
import { actionState, folderState, selectedState } from "$utils/atom";
import { sesstionStorageLibs } from "$utils/libs/storagesLibs";
import { useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ACTION_TYPES, TASK_LIST } from "./constants";
import { useSetFolderState } from "$utils/hooks/useSetFolderState";
import {
  FIRE_STORE_POSTS,
  KEY_EVENTS,
  TASK_BAR_HEIGHT,
} from "$utils/constants";
import { TDragState } from "$utils/types";
import { IWindowTitle } from "./types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "fbase";

export const useSetFolderWithStorage = () => {
  const savedFolderState = sesstionStorageLibs.getFolderState();
  const setFolderState = useSetRecoilState(folderState);
  const { search } = useLocation();
  const searchData = Object.fromEntries(new URLSearchParams(search));
  const folderData = searchData?.folder
    ? JSON.parse(searchData?.folder)
    : savedFolderState || null;
  useEffect(() => {
    if (folderData) {
      setFolderState(folderData);
    }
  }, []);
};

export const useHandleUserActions = () => {
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
};

export const useSetFolderSetting = ({
  windowState,
  setWindowState,
  item,
  onChangeFolderState,
}: IWindowTitle) => {
  const [dragStart, setDragStart] = useState(false);
  const [dragState, setDragState] = useState<TDragState>(null);
  const onMoveStart = (event: React.MouseEvent) => {
    setDragStart(true);
    setDragState({
      startX: event.clientX - windowState.x,
      startY: event.clientY - windowState.y,
    });
  };
  const onMove = (event: any) => {
    const changedX = event.clientX - (dragState?.startX || 0);
    const changedY = event.clientY - (dragState?.startY || 0);
    const screenHeight = event.view.innerHeight - TASK_BAR_HEIGHT;
    setWindowState((prev) => ({
      ...prev,
      y:
        changedY < 0
          ? 0
          : changedY + windowState.height > screenHeight
          ? screenHeight - windowState.height
          : changedY,
      x:
        changedX < 0
          ? 0
          : changedX + windowState.width > event.view.innerWidth
          ? event.view.innerWidth - windowState.width
          : changedX,
    }));
  };
  const onMoveEnd = () => {
    setDragStart(false);
    setDragState(null);
    if (item.x !== windowState.x || item.y !== windowState.y) {
      onChangeFolderState();
    }
  };
  const onMaximization = () => {
    const newFolderState = {
      ...windowState,
      isMax: windowState.isMax ? false : true,
    };
    onChangeFolderState(newFolderState);
  };
  return {
    onMaximization,
    onMoveStart,
    dragStart,
    onMove,
    onMoveEnd,
  };
};

export const useGetPosts = () => {
  const [posts, setPosts] = useState<any>({});
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, FIRE_STORE_POSTS));
    let data: any = {};
    querySnapshot.forEach((doc) => {
      data = { ...data, ...doc.data() };
    });
    setPosts(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return posts;
};
