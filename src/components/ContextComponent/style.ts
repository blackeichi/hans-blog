import { styled } from "styled-components";

interface IContextMenuBox {
  mouselocale: { x: number; y: number };
}

export const ContextMenuBox = styled.div<IContextMenuBox>`
  position: fixed;
  z-index: 10;
  left: ${(props) => `${props.mouselocale.x}px`};
  top: ${(props) => `${props.mouselocale.y}px`};
`;
