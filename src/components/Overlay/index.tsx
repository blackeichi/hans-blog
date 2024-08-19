import { styled } from "styled-components";

interface Overlay {
  onClick: () => void;
  open: boolean;
  children: React.ReactNode;
  style?: object;
}

export const Overlay = ({ onClick, open, children, style = {} }: Overlay) => {
  return (
    <Modal open={open}>
      <OverlayBox onClick={onClick} />
      <Box style={style} tabIndex={-1}>
        {children}
      </Box>
    </Modal>
  );
};

const Modal = styled.div<{
  open: boolean;
}>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const OverlayBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
`;
const Box = styled.div`
  position: absolute;
  margin: 0 auto;
  z-index: 1;
`;
