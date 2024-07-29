import { openState } from "$utils/atom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

interface HandleOpenStateProps {
  id: string;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HandleOpenState = ({
  id,
  isOpened,
  setIsOpened,
}: HandleOpenStateProps) => {
  const open = useRecoilValue(openState);
  useEffect(() => {
    if (isOpened && (!open || open !== id)) {
      setIsOpened(false);
    } else if (!isOpened && open === id) {
      setIsOpened(true);
    }
  }, [open, isOpened]);
  return <></>;
};
