import { selectedState } from "$utils/atom";
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
  const selected = useRecoilValue(selectedState);
  useEffect(() => {
    if (isOpened && (!selected || selected !== id)) {
      setIsOpened(false);
    } else if (!isOpened && selected === id) {
      setIsOpened(true);
    }
  }, [selected]);
  return <></>;
};
