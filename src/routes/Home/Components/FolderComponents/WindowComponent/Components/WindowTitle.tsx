import React from "react";
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
import { TASK_STATE } from "$routes/Home/constants";
import { ButtonComponent } from "$components/ButtonComponent";
import { IWindowTitle } from "$routes/Home/types";
import { useSetFolderSetting } from "$routes/Home/actions";
import { SetStateType, TFolderList } from "$utils/types";

export const WindowTitle = ({
  isProfile,
  windowState,
  item,
  setWindowState,
  setFolderState,
  onChangeFolderState,
  index,
}: IWindowTitle & {
  setFolderState: SetStateType<TFolderList>;
  index: number;
}) => {
  const { onMaximization, onMoveStart, dragStart, onMove, onMoveEnd } =
    useSetFolderSetting({
      windowState,
      setWindowState,
      item,
      onChangeFolderState,
    });
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
