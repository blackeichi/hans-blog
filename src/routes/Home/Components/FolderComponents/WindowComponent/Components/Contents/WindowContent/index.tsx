import styled from "styled-components";
import { TASK_LIST } from "$routes/Home/constants";
import { DocumentWindow } from "./DocumentWindow";
import { memo } from "react";
import { ContentWrapperComponent } from "$components/ContentWrapperComponent";
import { DocumentMenus } from "./DocumentMenus";
import { MenuBtnsComponent } from "../../MenuBtnsComponent";

const WindowContent = memo(({ type }: { type: string }) => {
  return (
    <>
      <MenuBtnsComponent>
        <DocumentMenus />
      </MenuBtnsComponent>
      <ContentWrapperComponent>
        {type === TASK_LIST.Documents ? <DocumentWindow /> : <TempBox />}
      </ContentWrapperComponent>
    </>
  );
});

const TempBox = styled.div`
  width: 100%;
  height: 1000px;
`;
export default WindowContent;
