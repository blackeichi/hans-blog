import { useState, memo, useCallback } from "react";
import { HandleOpenState } from "$components/Common/handleOpenState";
import { IconContextMenu } from "./IconContextMenu";
import { ACTION_TYPES } from "$routes/Home/constants";
import { ContextComponent } from "$components/ContextComponent";
import {
  TActionState,
  TMouseLocaleState,
  TSelectedState,
  TSizeState,
} from "$utils/types";
import { IconComponent } from "$components/IconComponent";
import { HomeIconBox } from "$routes/Home/styles";

interface HomeIconProps {
  item: {
    title: string;
    icon: string;
    x: number;
    y: number;
  };
  setSelected: React.Dispatch<React.SetStateAction<TSelectedState>>;
  setMouseLocale: React.Dispatch<React.SetStateAction<TMouseLocaleState>>;
  setAction: React.Dispatch<React.SetStateAction<TActionState>>;
  setSize: React.Dispatch<React.SetStateAction<TSizeState>>;
}
export const HomeIcon = memo(
  ({
    item,
    setSelected,
    setMouseLocale,
    setAction,
    setSize,
  }: HomeIconProps) => {
    const handleOpenFolder = useCallback(() => {
      setAction({
        type: ACTION_TYPES.OPEN_FOLDER,
      });
    }, []);
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const onClick = (event: any) => {
      setSize({
        width: event?.view?.innerWidth || 0,
        height: event?.view?.innerHeight || 0,
      });
      setSelected([item.title]);
      setMouseLocale(null);
    };
    const onContextMenu = (event: any) => {
      setSize({
        width: event?.view?.innerWidth || 0,
        height: event?.view?.innerHeight || 0,
      });
      setSelected([item.title]);
    };
    return (
      <HomeIconBox
        x={item.x}
        y={item.y}
        onClick={(event) => event.stopPropagation()}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <HandleOpenState
          id={item.title}
          isOpened={isSelected}
          setIsOpened={setIsSelected}
        />
        <ContextComponent
          contextMenu={
            <IconContextMenu
              handleOpenFolder={handleOpenFolder}
              setMouseLocale={setMouseLocale}
            />
          }
          id={item.title}
        >
          <IconComponent
            onClick={onClick}
            onContextMenu={onContextMenu}
            onDoubleClick={handleOpenFolder}
            isSelected={isSelected}
            icon={item.icon}
            title={item.title}
          />
        </ContextComponent>
      </HomeIconBox>
    );
  }
);
