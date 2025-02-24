import { GLOBAL_COLOR } from "$utils/constants";
import { useNavigateWithSaveSession } from "$utils/hooks/useNavigateWithSaveSession";
import { Menu, MenuBox } from "../../../../styles";

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
