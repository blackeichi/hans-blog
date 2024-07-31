import { useState } from "react";
import { ACTION_TYPES, TASK_ICONS } from "$routes/Home/constants";
import { styled } from "styled-components";
import { TActionState, TSelectedState, TSizeState } from "$utils/atom";

interface IHomeOverly {
  children: React.ReactNode;
  setSelected: React.Dispatch<React.SetStateAction<TSelectedState>>;
  setAction: React.Dispatch<React.SetStateAction<TActionState>>;
  setSize: React.Dispatch<React.SetStateAction<TSizeState>>;
}
type TDragState = {
  startX: number;
  endX?: number | undefined;
  startY: number;
  endY?: number | undefined;
} | null;

export const HomeOverly = ({
  children,
  setSelected,
  setAction,
  setSize,
}: IHomeOverly) => {
  const [dragStart, setDragStart] = useState(false);
  const [dragState, setDragState] = useState<TDragState>(null);
  const onDragStart = (event: any) => {
    setDragStart(true);
    setSize({
      width: event?.view?.innerWidth || 0,
      height: event?.view?.innerHeight || 0,
    });
    setDragState({
      startX: event.clientX,
      startY: event.clientY,
    });
  };
  const onDrag = (event: React.MouseEvent) => {
    const start = Math.min(dragState?.startX || 0, event.clientX);
    if (start <= 80) {
      let dragSelected = [];
      const start = Math.min(dragState?.startY || 0, event.clientY);
      const end = Math.max(dragState?.startY || 0, event.clientY);
      for (let i = 0; i < TASK_ICONS.length; i++) {
        if (
          start <= TASK_ICONS[i].y + 55 &&
          (end >= TASK_ICONS[i].y || TASK_ICONS[i].y + 55 <= end)
        ) {
          dragSelected.push(TASK_ICONS[i].title);
        }
      }
      if (dragSelected.length > 0) {
        setSelected(dragSelected);
      }
    } else {
      setSelected(null);
    }
    setDragState((prev) => ({
      startX: prev?.startX || 0,
      endX: event.clientX,
      startY: prev?.startY || 0,
      endY: event.clientY,
    }));
  };
  const onDragEnd = () => {
    setDragStart(false);
    setDragState(null);
  };
  const isDraged = dragStart && dragState?.endX && dragState?.endY;
  const handleKeyDown = (event: React.KeyboardEvent) => {
    setAction({
      type: ACTION_TYPES.HOME_KEY_DOWN,
      value: event.key,
    });
  };
  return (
    <HomeContainer
      onMouseDown={onDragStart}
      onMouseMove={dragStart ? onDrag : undefined}
      onClick={
        isDraged
          ? (event) => {
              event.stopPropagation();
              onDragEnd();
            }
          : onDragEnd
      }
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {children}
      {dragStart && dragState ? (
        <Drag
          width={Math.abs(
            dragState.startX - (dragState?.endX || dragState.startX)
          )}
          height={Math.abs(
            dragState.startY - (dragState?.endY || dragState.startY)
          )}
          x={
            dragState.startX > (dragState?.endX || dragState.startX)
              ? dragState?.endX || dragState.startX
              : dragState.startX
          }
          y={
            dragState.startY > (dragState?.endY || dragState.startY)
              ? dragState?.endY || dragState.startY
              : dragState.startY
          }
        />
      ) : null}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  outline: none;
  position: relative;
  box-sizing: border-box;
`;
const Drag = styled.div<{
  width: number;
  height: number;
  x: number;
  y: number;
}>`
  position: absolute;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};
  border: 1px dashed ${(props) => props.theme.gray};
`;
