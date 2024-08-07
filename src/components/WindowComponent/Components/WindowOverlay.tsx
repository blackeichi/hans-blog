import { ResizeWindowBox, WindowBox } from "../styles";
import { TFolder } from "$utils/types";
import boxResizeEvent from "$utils/libs/etcLibs";
import { TASK_STATE } from "$routes/Home/constants";
import {
  FOLDER_MIN_HEIGHT,
  FOLDER_MIN_WIDTH,
  TASK_BAR_HEIGHT,
} from "$utils/constans";

interface IWindowOverlay {
  isProfile: boolean;
  windowState: TFolder;
  setWindowState: React.Dispatch<React.SetStateAction<TFolder>>;
  onChangeFolderState: (value?: TFolder) => void;
  index: number;
  children: React.ReactNode;
}

export const WindowOverlay = ({
  children,
  isProfile,
  windowState,
  setWindowState,
  onChangeFolderState,
  index,
}: IWindowOverlay) => {
  return (
    <WindowBox
      tabIndex={0}
      onKeyDown={(event) => {
        event.stopPropagation();
      }}
      onMouseDown={(event) => {
        event.stopPropagation();
        onChangeFolderState();
      }}
      item={windowState}
      // z-index 값 높이기
      index={index + 10}
      initial={{
        scale: windowState.state === TASK_STATE.HIDE ? 0 : 0.9,
        y: windowState.state === TASK_STATE.HIDE ? 400 : 0,
        display: windowState.state === TASK_STATE.HIDE ? "none" : "block",
      }}
      animate={{
        scale: windowState.state === TASK_STATE.HIDE ? 0 : 1,
        y: windowState.state === TASK_STATE.HIDE ? 400 : 0,
        display: windowState.state === TASK_STATE.HIDE ? "none" : "block",
      }}
      exit={{ scale: 0.7, opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 0.1,
      }}
    >
      {children}
      {!isProfile && !windowState.isMax && (
        <ResizeWindowBox
          {...boxResizeEvent(
            (deltaX, deltaY, maxWidth, maxHeight) => {
              const max = {
                width: maxWidth - windowState.x,
                height: maxHeight - windowState.y - TASK_BAR_HEIGHT,
              };
              const newWidth = windowState.width + deltaX;
              const width =
                newWidth < FOLDER_MIN_WIDTH
                  ? FOLDER_MIN_WIDTH
                  : newWidth > max.width
                  ? max.width
                  : newWidth;
              const newHeight = windowState.height + deltaY;
              const height =
                newHeight < FOLDER_MIN_HEIGHT
                  ? FOLDER_MIN_HEIGHT
                  : newHeight > max.height
                  ? max.height
                  : newHeight;
              setWindowState((prev) => ({ ...prev, width, height }));
            },
            (width, height) => {
              // 오차가 20 발생.
              onChangeFolderState({
                ...windowState,
                width: width + 20,
                height: height + 20,
              });
            }
          )}
        />
      )}
    </WindowBox>
  );
};
