import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useTaskData } from 'hooks/useTaskData';
import { TaskList } from 'components/containers/organisms/Tasks/TaskList';

export const TaskListContainer = () => {
  const currentUserId = useCurrentUserId();
  const [taskData, { deleteCheckAble, deleteCheckFunc, deleteTaskFunc, load, nextEditTaskFunc, unDeleteCheckFunc }] = useTaskData();

  return <TaskList
           currentUserId={currentUserId}
           deleteCheckAble={deleteCheckAble}
           deleteCheckFunc={deleteCheckFunc}
           deleteTaskFunc={deleteTaskFunc}
           load={load}
           nextEditTaskFunc={nextEditTaskFunc}
           taskData={taskData}
           unDeleteCheckFunc={unDeleteCheckFunc}
         />;
};