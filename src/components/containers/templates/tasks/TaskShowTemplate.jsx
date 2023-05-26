import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { TaskListContainer } from "../../organisms/tasks/TaskListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TaskShowTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="タスク詳細" />
    <TaskListContainer />
  </MainWithHeaderContainer>
);
