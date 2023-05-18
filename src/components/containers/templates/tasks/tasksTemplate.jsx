import { MainWithHeader } from "../MainWithHeader";
import { TasksListContainer } from "../../organisms/tasks/TasksListContainer";

export const TasksTemplate = () => {
  return (
    <MainWithHeader>
      <TasksListContainer />
    </MainWithHeader>
  );
};
