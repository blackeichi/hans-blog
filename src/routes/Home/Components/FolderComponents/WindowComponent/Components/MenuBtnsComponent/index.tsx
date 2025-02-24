import { TaskbarBlankBox } from "$components/Layout/Taskbar/components";
import styled from "styled-components";
import { FlexBox } from "styles";

export const MenuBtnsComponent = ({ children }: { children?: JSX.Element }) => {
  return (
    <BtnBox>
      <PageBtnBox>
        <TaskbarBlankBox />
        {children}
      </PageBtnBox>
    </BtnBox>
  );
};

const BtnBox = styled(FlexBox)`
  padding: 5px 10px;
  height: 35px;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;
const PageBtnBox = styled(FlexBox)`
  height: 100%;
  position: relative;
`;
