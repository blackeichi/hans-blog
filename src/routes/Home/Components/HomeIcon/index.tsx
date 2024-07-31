import { useState, memo } from "react";
import { styled } from "styled-components";
import { HandleOpenState } from "$components/Common/handleOpenState";
import { ContextComponent } from "$components/ContextComponent.js";
import { IconContextMenu } from "./IconContextMenu";
import {
  TActionState,
  TMouseLocaleState,
  TSelectedState,
  TSizeState,
} from "$utils/atom";
import { ACTION_TYPES } from "$routes/Home/constants";

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
    const handleOpenFolder = () => {
      setAction({
        type: ACTION_TYPES.OPEN_FOLDER,
      });
    };
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
    const onDoubleClick = () => {
      handleOpenFolder();
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
            onMouseDown={onClick}
            onContextMenu={onContextMenu}
            onDoubleClick={onDoubleClick}
          >
            <Icon isSelected={isSelected} src={item.icon} />
            <IconName isSelected={isSelected}>{item.title}</IconName>
          </IconComponent>
        </ContextComponent>
      </HomeIconBox>
    );
  }
);
const HomeIconBox = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};
  z-index: 1;
  width: fit-content;
  height: fit-content;
`;
const IconComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  align-items: center;
  justify-content: space-between;
  height: 55px;
`;
const Icon = styled.div<{ isSelected: boolean; src: string }>`
  background-image: ${(props) =>
    props.isSelected
      ? `linear-gradient(to bottom, rgba(1, 1, 122,0.4), rgba(1, 1, 122,0.4)), url(${props.src})`
      : `url(${props.src})`};
  background-size: contain;
  background-position: center;
  height: 35px;
  width: 40px;
`;
const IconName = styled.div<{ isSelected: boolean }>`
  color: white;
  background-color: ${(props) =>
    props.isSelected ? "rgba(1, 1, 122, 0.4)" : "transparent"};
  border: ${(props) => (props.isSelected ? "2px dotted darkgray" : `none`)};
  height: 15px;
  font-size: 11px;
  display: flex;
  align-items: center;
  padding: 2px;
`;
