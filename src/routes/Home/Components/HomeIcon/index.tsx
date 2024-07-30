import { useState } from "react";
import { styled } from "styled-components";
import { HandleOpenState } from "$components/Common/handleOpenState";
import { ContextComponent } from "$components/ContextComponent.js";
import { IconContextMenu } from "./IconContextMenu";
import { SetOpenedFolders } from "$routes/Home/actions";
import { useSetRecoilState } from "recoil";
import { sizeState } from "$utils/atom";

interface HomeIconProps {
  item: {
    title: string;
    icon: string;
  };
  setSelected: Function;
  setMouseLocale: Function;
}
export const HomeIcon = ({
  item,
  setSelected,
  setMouseLocale,
}: HomeIconProps) => {
  const setSize = useSetRecoilState(sizeState);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const onSetOpenedFolders: Function = SetOpenedFolders([item.title]);
  const onClick = (event: any) => {
    event.stopPropagation();
    setSize({
      width: event?.view?.innerWidth || 0,
      height: event?.view?.innerHeight || 0,
    });
    setSelected(item.title);
    setMouseLocale(null);
  };
  const onContextMenu = (event: any) => {
    setSize({
      width: event?.view?.innerWidth || 0,
      height: event?.view?.innerHeight || 0,
    });
    setSelected(item.title);
  };
  const onDoubleClick = () => {
    onSetOpenedFolders();
    setSelected(null);
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
            setSelected={setSelected}
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
