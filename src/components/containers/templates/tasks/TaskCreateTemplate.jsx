import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { TaskCreateFormContainer } from "../../organisms/tasks/TaskForm/TaskCreateFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TaskCreateTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="新規登録" />
    <TaskCreateFormContainer />
  </MainWithHeaderContainer>
);
