import { ButtonComponent } from "$components/ButtonComponent";
import { TaskbarBlankBox } from "$components/Layout/Taskbar/components";
import { isLoggedInState } from "$utils/atom";
import { GLOBAL_COLOR } from "$utils/constans";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { FlexBox } from "styles";

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
        {open && (
          <MenuBox>
            <Menu
              whileHover={{
                backgroundColor: GLOBAL_COLOR.blue,
                color: "white",
              }}
              onMouseDown={() => console.log("test!")}
            >
              추가 (ADD)
            </Menu>
          </MenuBox>
        )}
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
const MenuBox = styled.div`
  position: absolute;
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.darkGray};
  border-right: 2px solid ${(props) => props.theme.darkGray};
  background-color: ${(props) => props.theme.gray};
  width: 150px;
  left: 25px;
  top: 26px;
  padding: 5px 2px;
`;
const Menu = styled(motion.div)`
  width: 100%;
  padding: 5px;
  padding-left: 5px;
  font-size: 12px;
`;
