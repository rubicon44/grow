import { MainWithHeader } from "../MainWithHeader";
import { TasksListContainer } from "../../organisms/tasks/TasksListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TasksTemplate = () => (
  <MainWithHeader>
    {/* todo: 「タスク全体」と「フォロー中の人のタスクのみ」とで表示を分けるタブを作成。 */}
    <TitleWithBackArrowHeader title="タスク一覧" />
    <TasksListContainer />
  </MainWithHeader>
);
