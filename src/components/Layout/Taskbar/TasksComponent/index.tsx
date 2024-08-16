import { folderState } from "$utils/atom";
import { useState, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { SetTaskState } from "./setTaskState";
import { EachTask } from "./EachTask";
import { TASK_STATE } from "$routes/Home/constants";

export const TasksComponent = () => {
  const setFolder = useSetRecoilState(folderState);
  const [taskState, setTaskState] = useState<string[]>([]);
  const [mainTask, setMainTask] = useState<string>("");
  const onClickTask = useCallback((task: string) => {
    setMainTask(task);
    setFolder((prev) => [
      ...prev.filter((item) => item.title !== task),
      {
        ...prev.filter((item) => item.title === task)[0],
        state: TASK_STATE.OPEN,
      },
    ]);
  }, []);
  return (
    <TasksWrapper>
      <SetTaskState
        taskState={taskState}
        setTaskState={setTaskState}
        mainTask={mainTask}
        setMainTask={setMainTask}
      />
      {taskState.length > 0 &&
        taskState.map((task) => (
          <EachTask
            key={task}
            task={task}
            isMain={mainTask === task}
            width={100 / taskState.length}
            onClickTask={onClickTask}
          />
        ))}
    </TasksWrapper>
  );
};

const TasksWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 3px;
  flex-shrink: 1;
`;
