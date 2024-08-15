import { folderState } from "$utils/atom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { SetTaskState } from "./setTaskState";
import { TTaskState } from "$utils/types";

export const Tasks = () => {
  const setFolder = useSetRecoilState(folderState);
  const [taskState, setTaskState] = useState<TTaskState[]>([]);
  return (
    <TasksWrapper>
      <SetTaskState taskState={taskState} setTaskState={setTaskState} />
    </TasksWrapper>
  );
};

const TasksWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.theme.bgGreen};
  width: 100px;
`;
