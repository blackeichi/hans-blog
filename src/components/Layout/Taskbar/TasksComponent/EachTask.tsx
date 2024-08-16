import { ICONS } from "$routes/Home/constants";
import { styled } from "styled-components";

export const EachTask = ({
  task,
  isMain,
  width,
  onClickTask,
}: {
  task: string;
  isMain: boolean;
  width: number;
  onClickTask: (task: string) => void;
}) => {
  return (
    <TaskBox
      onClick={() => onClickTask(task)}
      width={`${width}%`}
      isMain={isMain}
    >
      <Icon src={ICONS[task]} />
      <TaskTitle>{task}</TaskTitle>
    </TaskBox>
  );
};

const TaskBox = styled.div<{ width: string; isMain: boolean }>`
  height: 100%;
  max-width: 200px;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 11px;
  padding: 3px;
  padding-left: 5px;
  gap: 5px;
  background-color: ${(props) =>
    props.isMain ? "rgba(255,255,255,0.6)" : props.theme.gray};
  border-top: 2px solid
    ${(props) => (props.isMain ? props.theme.darkGray : props.theme.lightGray)};
  border-left: 2px solid
    ${(props) => (props.isMain ? props.theme.darkGray : props.theme.lightGray)};
  border-bottom: 2px solid
    ${(props) => (props.isMain ? "white" : props.theme.darkGray)};
  border-right: 2px solid
    ${(props) => (props.isMain ? "white" : props.theme.darkGray)};
`;
const Icon = styled.div<{ src: string }>`
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
  height: 15px;
  width: 15px;
  flex-shrink: 0;
`;
const TaskTitle = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
