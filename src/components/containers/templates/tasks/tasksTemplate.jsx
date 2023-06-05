import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { TasksListContainer } from "../../organisms/tasks/TasksListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TasksTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="タスク一覧" />
    <TasksListContainer />
  </MainWithHeaderContainer>
);
