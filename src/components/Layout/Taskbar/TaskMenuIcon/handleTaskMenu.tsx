import { openState } from "$utils/atom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

interface HandleTaskMenuProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ID: string;
}

export const HandleTaskMenu = ({ setOpen, ID }: HandleTaskMenuProps) => {
  const open = useRecoilValue(openState);
  useEffect(() => {
    if (!open || open !== ID) {
      setOpen(false);
    }
  }, [open]);
  return <></>;
};
