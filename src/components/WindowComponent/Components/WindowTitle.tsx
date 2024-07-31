import { useState } from "react";
import { FlexBox } from "styles";
import {
  CloseIcon,
  IconBox,
  MaximizationIcon,
  MinimalizationIcon,
  WindowTitleBox,
  WindowTitleExtends,
} from "../styles";
import { ClickButtonEvent } from "./ClickButtonEvent";
import { TDragState, TFolder } from "$utils/types";
import { TASK_BAR_HEIGHT } from "$utils/constans";

interface IWindowTitle {
  windowState: TFolder;
  item: TFolder;
  setWindowState: React.Dispatch<React.SetStateAction<TFolder>>;
  onChangeFolderState: () => void;
}

export const WindowTitle = ({
  windowState,
  item,
  setWindowState,
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
  const WindowBtns = [
    <MinimalizationIcon />,
    <MaximizationIcon />,
    <CloseIcon>x</CloseIcon>,
  ];
  return (
    <WindowTitleBox
      onMouseDown={onMoveStart}
      onMouseMove={dragStart ? onMove : undefined}
      onMouseUp={onMoveEnd}
    >
      {dragStart && <WindowTitleExtends />}
      {windowState.title}
      <FlexBox
        style={{ zIndex: 1 }}
        onClick={(event) => event.stopPropagation()}
      >
        {WindowBtns.map((icon, index) => (
          <IconBox key={index}>
            <ClickButtonEvent icon={icon} />
          </IconBox>
        ))}
      </FlexBox>
    </WindowTitleBox>
  );
};
