import { styled } from "styled-components";
import { TaskMenuIcon } from "./TaskMenuIcon";
import { TaskbarBlankBox, TaskbarSeparator } from "./components";
import { FlexBox } from "styles";
import { TaskBarClock } from "./TaskBarClock";

export const Taskbar = () => {
  return (
    <TaskbarBox>
      <Box>
        <TaskMenuIcon />
        <TaskbarBlankBox />
        <TaskbarSeparator />
        <TaskbarBlankBox />
      </Box>
      <Box>
        <TaskbarSeparator />
        <TaskBarClock />
      </Box>
    </TaskbarBox>
  );
};

const TaskbarBox = styled.div`
  width: 100%;
  height: 35px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.gray};
  border-top: 2px solid ${(props) => props.theme.lightGray};
  padding: 2px 4px;
  display: flex;
  justify-content: space-between;
  font-family: "Retro";
  z-index: 1000;
`;
const Box = styled(FlexBox)`
  gap: 3px;
`;
