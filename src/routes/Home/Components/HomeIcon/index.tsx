import { useState } from "react";
import { styled } from "styled-components";
import { HandleOpenState } from "$components/Common/handleOpenState";
import { ContextComponent } from "$components/ContextComponent.js";
import { IconContextMenu } from "./IconContextMenu";
import { SetOpenedFolders } from "$routes/Home/actions";

type ISize = {
  innerWidth: number;
  innerHeight: number;
};

interface HomeIconProps {
  item: {
    title: string;
    icon: string;
  };
  screen: ISize;
  setScreen: React.Dispatch<React.SetStateAction<ISize>>;
  setOpenState: Function;
  setMouseLocale: Function;
}
export const HomeIcon = ({
  item,
  screen,
  setScreen,
  setOpenState,
  setMouseLocale,
}: HomeIconProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const onSetOpenedFolders: Function = SetOpenedFolders([item.title], screen);
  const onClick = (event: any) => {
    event.stopPropagation();
    setScreen({
      innerWidth: event?.view?.innerWidth || 0,
      innerHeight: event?.view?.innerHeight || 0,
    });
    setOpenState(item.title);
    setMouseLocale(null);
  };
  const onContextMenu = (event: any) => {
    setScreen({
      innerWidth: event?.view?.innerWidth || 0,
      innerHeight: event?.view?.innerHeight || 0,
    });
    setOpenState(item.title);
  };
  const onDoubleClick = () => {
    onSetOpenedFolders();
    setOpenState(null);
  };
  return (
    <>
      <HandleOpenState
        id={item.title}
        isOpened={isSelected}
        setIsOpened={setIsSelected}
      />
      <ContextComponent
        contextMenu={
          <IconContextMenu
            onSetOpenedFolders={onSetOpenedFolders}
            setOpenState={setOpenState}
            setMouseLocale={setMouseLocale}
          />
        }
        id={item.title}
      >
        <HomeIconBox
          onClick={onClick}
          onContextMenu={onContextMenu}
          onDoubleClick={onDoubleClick}
        >
          <Icon isSelected={isSelected} src={item.icon} />
          <IconName isSelected={isSelected}>{item.title}</IconName>
        </HomeIconBox>
      </ContextComponent>
    </>
  );
};

const HomeIconBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  margin-left: 7px;
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
