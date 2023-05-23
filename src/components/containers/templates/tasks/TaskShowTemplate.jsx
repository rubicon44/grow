import { MainWithHeader } from "../MainWithHeader";
import { TaskListContainer } from "../../organisms/tasks/TaskListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TaskShowTemplate = () => (
  <MainWithHeader title="タスク詳細">
    <TitleWithBackArrowHeader />
    <TaskListContainer />
  </MainWithHeader>
);
