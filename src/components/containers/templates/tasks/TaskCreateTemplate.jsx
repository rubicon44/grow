import { MainWithHeader } from "../MainWithHeader";
import { TaskCreateFormContainer } from "../../organisms/tasks/TaskForm/TaskCreateFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TaskCreateTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader>新規登録</TitleWithBackArrowHeader>
    <TaskCreateFormContainer />
  </MainWithHeader>
);
