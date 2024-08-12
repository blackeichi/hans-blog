import { ButtonComponent } from "$components/ButtonComponent";
import { TaskbarBlankBox } from "$components/Layout/Taskbar/components";
import { isLoggedInState } from "$utils/atom";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { FlexBox } from "styles";
import { MenuComponent } from "./MenuComponent";

export const WindowTopContent = () => {
  const isLoggedIn = useRecoilValue<boolean>(isLoggedInState);
  const [open, setOpen] = useState(false);
  return (
    <BtnBox>
      <PageBtnBox>
        <TaskbarBlankBox />
        <ButtonComponent
          action={() => {
            setOpen((prev) => !prev);
          }}
          content={<span>File</span>}
          width="50px"
          height="25px"
          isShadow={false}
          onBlur={() => setOpen(false)}
          disabled={!isLoggedIn}
        />
        {open && <MenuComponent />}
      </PageBtnBox>
      <PageBtnBox>
        <FontAwesomeIcon fontSize="25px" icon={faCaretLeft} />
        <FontAwesomeIcon fontSize="25px" icon={faCaretRight} />
      </PageBtnBox>
    </BtnBox>
  );
};

const BtnBox = styled(FlexBox)`
  padding: 5px 10px;
  height: 35px;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;
const PageBtnBox = styled(FlexBox)`
  height: 100%;
  gap: 10px;
  position: relative;
`;
