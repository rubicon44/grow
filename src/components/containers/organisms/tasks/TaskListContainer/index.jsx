import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useMoveToEditTask } from "../../../../../hooks/useMoveToEditTask";
import { useTaskData } from "../../../../../hooks/useTaskData";
import { useTaskDelete } from "../../../../../hooks/useTaskDelete";
import { TaskList } from "../TaskList";
import { ErrorMessage } from "../../common/ErrorMessage";

export const TaskListContainer = () => {
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const { error, taskData } = useTaskData();
  const {
    deleteCheckAble,
    deleteCheckFunc,
    deleteTaskFunc,
    isButtonDisabled,
    unDeleteCheckFunc,
  } = useTaskDelete(taskData);
  const { moveToEditTask } = useMoveToEditTask(taskData);

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  if (taskData === null) {
    return null;
  }
  return (
    <TaskList
      currentUserId={currentUserId}
      deleteCheckAble={deleteCheckAble}
      deleteCheckFunc={deleteCheckFunc}
      deleteTaskFunc={deleteTaskFunc}
      isButtonDisabled={isButtonDisabled}
      moveToEditTask={moveToEditTask}
      taskData={taskData}
      unDeleteCheckFunc={unDeleteCheckFunc}
    />
  );
};
