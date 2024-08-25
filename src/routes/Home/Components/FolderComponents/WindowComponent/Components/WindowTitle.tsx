import React, { useState } from "react";
import { FlexBox } from "styles";
import {
  CloseIcon,
  MaximizationIcon,
  MinimalizationIcon,
  Title,
  UnMaximizationBox,
  UnMaximizationIcom,
  WindowTitleBox,
  WindowTitleExtends,
} from "../styles";
import { TDragState, TFolder, TFolderList } from "$utils/types";
import { TASK_BAR_HEIGHT } from "$utils/constans";
import { TASK_STATE } from "$routes/Home/constants";
import { ButtonComponent } from "$components/ButtonComponent";

interface IWindowTitle {
  isProfile: boolean;
  windowState: TFolder;
  item: TFolder;
  setWindowState: React.Dispatch<React.SetStateAction<TFolder>>;
  setFolderState: React.Dispatch<React.SetStateAction<TFolderList>>;
  onChangeFolderState: (value?: TFolder) => void;
  index: number;
}

export const WindowTitle = ({
  isProfile,
  windowState,
  item,
  setWindowState,
  setFolderState,
  onChangeFolderState,
  index,
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
  const WindowBtns = [
    {
      icon: <MinimalizationIcon />,
      action: () => {
        const newFolderState = {
          ...windowState,
          state: TASK_STATE.HIDE,
        };
        onChangeFolderState(newFolderState);
      },
    },
    isProfile
      ? null
      : {
          icon: windowState.isMax ? (
            <UnMaximizationBox>
              <UnMaximizationIcom
                style={{
                  bottom: 0,
                  zIndex: 1,
                }}
              />
              <UnMaximizationIcom
                style={{
                  right: 1,
                }}
              />
            </UnMaximizationBox>
          ) : (
            <MaximizationIcon />
          ),
          action: () => onMaximization(),
        },
    {
      icon: <CloseIcon>x</CloseIcon>,
      action: () => {
        setFolderState((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1, prev.length),
        ]);
      },
    },
  ];
  return (
    <WindowTitleBox
      onMouseDown={onMoveStart}
      onMouseMove={dragStart ? onMove : undefined}
      onMouseLeave={onMoveEnd}
      onMouseUp={onMoveEnd}
    >
      {dragStart && <WindowTitleExtends />}
      <Title onDoubleClick={() => (isProfile ? null : onMaximization())}>
        {windowState.title}
      </Title>
      <FlexBox
        style={{ zIndex: 1 }}
        onClick={(event) => event.stopPropagation()}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {WindowBtns.map((btn, index) => (
          <React.Fragment key={index}>
            {btn && (
              <ButtonComponent
                width="16px"
                height="16px"
                content={btn.icon}
                action={btn.action}
              />
            )}
          </React.Fragment>
        ))}
      </FlexBox>
    </WindowTitleBox>
  );
};