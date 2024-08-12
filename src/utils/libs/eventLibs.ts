type TChangeEvent = (
  width: number,
  height: number,
  maxWidth: number,
  maxHeight: number
) => void;

export default function boxResizeEvent(
  onDragChange: TChangeEvent,
  mouseUpEvent: TChangeEvent
) {
  return {
    onMouseDown: (clickEvent: any) => {
      clickEvent.stopPropagation();
      const mouseMoveHandler = (moveEvent: any) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        const deltaY = moveEvent.screenY - clickEvent.screenY;
        onDragChange(
          deltaX,
          deltaY,
          moveEvent.view.innerWidth,
          moveEvent.view.innerHeight
        );
      };
      const mouseUpHandler = (event: any) => {
        event.stopPropagation();
        mouseUpEvent(
          clickEvent.target.offsetLeft,
          clickEvent.target.offsetTop,
          clickEvent.view.innerWidth,
          clickEvent.view.innerHeight
        );
        document.removeEventListener("mousemove", mouseMoveHandler);
      };
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
  };
}
