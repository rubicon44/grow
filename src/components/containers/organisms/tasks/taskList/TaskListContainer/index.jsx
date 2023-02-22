import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useNavigateToEditTask } from 'hooks/useNavigateToEditTask';
import { useShowPopup } from 'hooks/useShowPopup';
import { useTaskData } from 'hooks/useTaskData';
import { useTaskDelete } from 'hooks/useTaskDelete';
import { TaskList } from 'components/containers/organisms/Tasks/TaskList';

export const TaskListContainer = () => {
  const { showPopup } = useShowPopup();
  const currentUserId = useCurrentUserId();
  const { loading, error, taskData } = useTaskData();
  const { deleteCheckAble, deleteCheckFunc, deleteTaskFunc, deleting, isButtonDisabled, unDeleteCheckFunc } = useTaskDelete(taskData);
  const { navigateToEditTask } = useNavigateToEditTask(taskData);

  if (error) throw error;
  if (loading) return <>Loading...</>;
  if (deleting) return <>Deleting...</>;
  return <TaskList
           currentUserId={currentUserId}
           deleteCheckAble={deleteCheckAble}
           deleteCheckFunc={deleteCheckFunc}
           deleteTaskFunc={deleteTaskFunc}
           isButtonDisabled={isButtonDisabled}
           navigateToEditTask={navigateToEditTask}
           showPopup={showPopup}
           taskData={taskData}
           unDeleteCheckFunc={unDeleteCheckFunc}
         />;
};