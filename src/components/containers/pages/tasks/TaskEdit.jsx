import { useLocation } from "react-router-dom";
import { TaskEditTemplate } from "../../templates/tasks/TaskEditTemplate";

export const TaskEdit = () => {
  // todo: useLocationを使用せず、TaskEdit内のorganismsで直接データを取得する。
  // todo: 「直接このページにアクセスしても良いか」を検討。
  const location = useLocation();
  const { task: taskDataTask } = location.state.taskData;

  return <TaskEditTemplate taskDataTask={taskDataTask} />;
};
