import { MainWithHeader } from "../MainWithHeader";
import { TasksListContainer } from "../../organisms/tasks/TasksListContainer";
import { Title } from "../../../presentational/atoms/Title";

export const TasksTemplate = () => (
  <MainWithHeader>
    <Title>タスク一覧</Title>
    <TasksListContainer />
  </MainWithHeader>
);
