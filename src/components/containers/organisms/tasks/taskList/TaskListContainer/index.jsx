import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useTaskData } from 'hooks/useTaskData';
import { useTaskEditAndDelete } from 'hooks/useTaskEditAndDelete';
import { TaskList } from 'components/containers/organisms/Tasks/TaskList';

export const TaskListContainer = () => {
  const currentUserId = useCurrentUserId();
  const taskData = useTaskData();
  const { deleteCheckAble, deleteCheckFunc, deleteTaskFunc, nextEditTaskFunc, load, unDeleteCheckFunc } = useTaskEditAndDelete();

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