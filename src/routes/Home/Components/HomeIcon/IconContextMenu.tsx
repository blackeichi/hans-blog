import { ContextMenu, IconContextMenuBox } from "$routes/Home/styles";
import { GLOBAL_COLOR } from "$utils/constants";

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
