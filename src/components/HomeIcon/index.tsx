import React, { useState } from "react";
import { styled } from "styled-components";
import {
  TselectedIndexState,
  mouseLocaleState,
  openState,
  openedFolderState,
} from "$utils/atom";
import { useSetRecoilState } from "recoil";
import { HandleOpenState } from "$components/Common/handleOpenState";
import { ContextComponent } from "$components/ContextComponent.js";
import { IconContextMenu } from "./IconContextMenu";
import { TASK_STATE } from "$routes/Home/constants";

interface HomeIconProps {
  item: {
    title: string;
    icon: string;
  };
  index: number;
}

export const HomeIcon = ({ item, index }: HomeIconProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const setOpenState = useSetRecoilState(openState);
  const setMouseLocale = useSetRecoilState(mouseLocaleState);
  const setOpendFolder = useSetRecoilState(openedFolderState);
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpenState(item.title);
    setMouseLocale(null);
  };
  const onContextMenu = () => {
    setOpenState(item.title);
  };
  const onDoubleClick = () => {
    setOpendFolder((prev: TselectedIndexState) => {
      const filtered = prev.filter((value) => value.title === item.title);
      return [...filtered, { title: item.title, state: TASK_STATE.OPEN }];
    });
  };
  return (
    <>
      <HandleOpenState
        id={item.title}
        isOpened={isSelected}
        setIsOpened={setIsSelected}
      />
      <ContextComponent contextMenu={<IconContextMenu />} id={item.title}>
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
