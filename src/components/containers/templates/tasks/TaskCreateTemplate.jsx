import { MainWithHeader } from "../MainWithHeader";
import { TaskCreateFormContainer } from "../../organisms/tasks/TaskForm/TaskCreateFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TaskCreateTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader title="新規登録" />
    <TaskCreateFormContainer />
  </MainWithHeader>
);
