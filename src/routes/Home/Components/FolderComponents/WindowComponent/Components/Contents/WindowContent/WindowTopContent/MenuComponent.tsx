import { GLOBAL_COLOR } from "$utils/constants";
import { useNavigateWithSaveSession } from "$utils/hooks/useNavigateWithSaveSession";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const MenuComponent = () => {
  const navigateWithSave = useNavigateWithSaveSession("/add");
  return (
    <MenuBox>
      <Menu
        whileHover={{
          backgroundColor: GLOBAL_COLOR.blue,
          color: "white",
        }}
        onMouseDown={() => navigateWithSave()}
      >
        추가 (Add)
      </Menu>
    </MenuBox>
  );
};
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
