import { MainWithHeader } from "../MainWithHeader";
import { TasksListContainer } from "../../organisms/tasks/TasksListContainer";
// import { Title } from "../../../presentational/atoms/Title";

export const TasksTemplate = () => (
  <MainWithHeader title="タスク一覧">
    {/* todo: 「タスク全体」と「フォロー中の人のタスクのみ」とで表示を分けるタブを作成。 */}
    <TasksListContainer />
  </MainWithHeader>
);
