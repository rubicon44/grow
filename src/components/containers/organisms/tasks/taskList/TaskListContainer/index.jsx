import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useTaskData } from 'hooks/useTaskData';
import { useTaskEditAndDelete } from 'hooks/useTaskEditAndDelete';
import { TaskList } from 'components/containers/organisms/Tasks/TaskList';

export const TaskListContainer = () => {
  const currentUserId = useCurrentUserId();
  const { loading, error, taskData } = useTaskData();
  const { deleteCheckAble, deleteCheckFunc, deleteTaskFunc, isButtonDisabled, nextEditTaskFunc, unDeleteCheckFunc } = useTaskEditAndDelete(taskData);

  if (error) throw error;
  if (loading) return <>Loading...</>;
  return <TaskList
           currentUserId={currentUserId}
           deleteCheckAble={deleteCheckAble}
           deleteCheckFunc={deleteCheckFunc}
           deleteTaskFunc={deleteTaskFunc}
           isButtonDisabled={isButtonDisabled}
           nextEditTaskFunc={nextEditTaskFunc}
           taskData={taskData}
           unDeleteCheckFunc={unDeleteCheckFunc}
         />;
};