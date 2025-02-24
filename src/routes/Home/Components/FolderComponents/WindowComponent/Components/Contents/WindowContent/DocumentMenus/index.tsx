import { useState } from "react";
import { ButtonComponent } from "$components/ButtonComponent";
import { MenuComponent } from "./MenuComponent";

export const DocumentMenus = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonComponent
        action={() => {
          setOpen((prev) => !prev);
        }}
        content={<span>File</span>}
        width="50px"
        height="25px"
        isShadow={false}
        onBlur={() => setOpen(false)}
        disabled={false}
      />
      {open && <MenuComponent />}
    </>
  );
};
