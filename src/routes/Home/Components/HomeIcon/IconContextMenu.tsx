import { GLOBAL_COLOR } from "$utils/constans";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const IconContextMenu = ({ handleOpenFolder, setMouseLocale }: any) => {
  const onClickEvent = () => {
    handleOpenFolder();
    setMouseLocale(null);
  };
  return (
    <IconContextMenuBox>
      <ContextMenu
        whileHover={{
          backgroundColor: GLOBAL_COLOR.blue,
          color: "white",
        }}
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
        onClick={onClickEvent}
      >
        Open
      </ContextMenu>
    </IconContextMenuBox>
  );
};

const IconContextMenuBox = styled.div`
  padding-bottom: 2px;
  padding-right: 2px;
  background-color: ${(props) => props.theme.gray};
  width: 150px;
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.darkGray};
  border-right: 2px solid ${(props) => props.theme.darkGray};
`;
const ContextMenu = styled(motion.div)`
  padding: 5px 0;
  padding-left: 30px;
  font-size: 13px;
`;
