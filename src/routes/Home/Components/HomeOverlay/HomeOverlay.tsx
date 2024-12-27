import { useState, memo } from "react";
import { ACTION_TYPES, TASK_ICONS } from "$routes/Home/constants";
import {
  TActionState,
  TDragState,
  TSelectedState,
  TSizeState,
} from "$utils/types";
import { TASK_BAR_HEIGHT } from "$utils/constants";
import { mouseLocaleState } from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { Drag, HomeContainer } from "$routes/Home/styles";

interface IHomeOverly {
  children: React.ReactNode;
  setSelected: React.Dispatch<React.SetStateAction<TSelectedState>>;
  setAction: React.Dispatch<React.SetStateAction<TActionState>>;
  setSize: React.Dispatch<React.SetStateAction<TSizeState>>;
}

export const HomeOverly = memo(
  ({ children, setSelected, setAction, setSize }: IHomeOverly) => {
    const setMouseLocale = useSetRecoilState(mouseLocaleState);
    const [dragStart, setDragStart] = useState(false);
    const [dragState, setDragState] = useState<TDragState>(null);
    const onDragStart = (event: any) => {
      if (event?.button === 0) {
        setDragStart(true);
        setSize({
          width: event?.view?.innerWidth || 0,
          height: event?.view?.innerHeight || 0,
        });
        setDragState({
          startX: event.clientX,
          startY: event.clientY,
        });
      }
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
        taskbarHeight={TASK_BAR_HEIGHT}
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
        onBlur={() => {
          setSelected(null);
          setMouseLocale(null);
        }}
        tabIndex={0}
        autoFocus
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
  }
);
