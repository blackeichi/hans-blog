import { ResizeWindowBox, WindowBox } from "../styles";
import { TFolder } from "$utils/types";
import boxResizeEvent from "$utils/libs/etcLibs";
import { TASK_STATE } from "$routes/Home/constants";

interface IWindowOverlay {
  windowState: TFolder;
  setWindowState: React.Dispatch<React.SetStateAction<TFolder>>;
  onChangeFolderState: (value?: TFolder) => void;
  index: number;
  children: React.ReactNode;
}

export const WindowOverlay = ({
  children,
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
      <ResizeWindowBox
        {...boxResizeEvent(
          (deltaX, deltaY) => {
            const newWidth = windowState.width + deltaX;
            const width = newWidth < 200 ? 200 : newWidth;
            const newHeight = windowState.height + deltaY;
            const height = newHeight < 150 ? 150 : newHeight;
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
    </WindowBox>
  );
};
