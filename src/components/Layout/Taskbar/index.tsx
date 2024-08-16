import { styled } from "styled-components";
import { TaskIconComponent } from "./TaskIconComponent";
import { TaskbarBlankBox, TaskbarSeparator } from "./components";
import { FlexBox } from "styles";
import { TaskClockComponent } from "./TaskClockComponent";
import { TASK_BAR_HEIGHT } from "$utils/constans";
import { TasksComponent } from "./TasksComponent";

export const Taskbar = () => {
  return (
    <TaskbarBox height={TASK_BAR_HEIGHT}>
      <Box
        style={{
          width: "100%",
        }}
      >
        <TaskIconComponent />
        <TaskbarBlankBox />
        <TaskbarSeparator />
        <TaskbarBlankBox />
        <TasksComponent />
      </Box>
      <Box>
        <TaskbarSeparator />
        <TaskClockComponent />
      </Box>
    </TaskbarBox>
  );
};

const TaskbarBox = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.gray};
  border-top: 2px solid ${(props) => props.theme.lightGray};
  padding: 2px 4px;
  display: flex;
  justify-content: space-between;
  gap: 3px;

  z-index: 1000;
`;
const Box = styled(FlexBox)`
  gap: 3px;
`;
