import { useState } from "react";
import { styled } from "styled-components";
import { useSetRecoilState } from "recoil";
import { folderState, mouseLocaleState, selectedState } from "$utils/atom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { FolderComponents } from "./Components/FolderComponents";
import { TASK_ICONS } from "./constants";
import { HomeIcon } from "./Components/HomeIcon";

type TDragState = {
  startX: number;
  endX?: number | undefined;
  startY: number;
  endY?: number | undefined;
} | null;

const withHome = (Component: any) => {
  return () => {
    const [ready, setReady] = useState(false);
    const setFolderState = useSetRecoilState(folderState);
    const [searchParams] = useSearchParams();
    const folderData = searchParams.get("folder")
      ? JSON.parse(searchParams.get("folder") || "")
      : [];
    useEffect(() => {
      setFolderState(folderData);
      setReady(true);
    }, []);
    return ready ? <Component /> : <></>;
  };
};

const Home = withHome(() => {
  const setSelected = useSetRecoilState(selectedState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  const [dragStart, setDragStart] = useState(false);
  const [dragState, setDragState] = useState<TDragState>(null);
  const onDragStart = (event: React.MouseEvent) => {
    setDragStart(true);
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
      // tabIndex={0}
      // onKeyDown={(event) => console.log(event)}
    >
      {TASK_ICONS.map((item) => (
        <HomeIcon
          key={item.title}
          item={item}
          setSelected={setSelected}
          setMouseLocale={setMouseLocale}
        />
      ))}
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
      <FolderComponents />
    </HomeContainer>
  );
});

export default Home;

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
