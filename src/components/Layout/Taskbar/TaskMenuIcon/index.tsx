import { styled } from "styled-components";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { openState } from "$utils/atom";
import { HandleOpenState } from "$components/Common/handleOpenState";

const ID = "TaskMenuIcon";

export const TaskMenuIcon = () => {
  const [open, setOpen] = useState<boolean>(false);
  const setOpenState = useSetRecoilState(openState);
  const handleTaskMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (!open) {
      setOpenState(ID);
    } else {
      setOpenState(null);
    }
  };
  return (
    <>
      <HandleOpenState id={ID} isOpened={open} setIsOpened={setOpen} />
      <TaskMenuBox open={open}>
        <TapBox open={open} onClick={handleTaskMenu}>
          <WinIcon alt="window" src="/images/windowIcon.png" />
          Start
        </TapBox>
      </TaskMenuBox>
    </>
  );
};

const TaskMenuBox = styled.div<{ open: boolean }>`
  height: 100%;
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.darkGray};
  border-right: 2px solid ${(props) => props.theme.darkGray};
  padding: ${(props) => (props.open ? "2px" : "1px")};
  width: 90px;
  overflow: hidden;
`;
const TapBox = styled.div<{ open: boolean }>`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  gap: 5px;
  box-sizing: border-box;
  border: ${(props) => (props.open ? "1px dotted gray" : "none")};
`;
const WinIcon = styled.img`
  height: 25px;
`;
