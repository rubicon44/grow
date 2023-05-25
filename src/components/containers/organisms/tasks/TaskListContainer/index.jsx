import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useMoveToEditTask } from "../../../../../hooks/useMoveToEditTask";
import { useShowPopup } from "../../../../../hooks/useShowPopup";
import { useTaskData } from "../../../../../hooks/useTaskData";
import { useTaskDelete } from "../../../../../hooks/useTaskDelete";
import { TaskList } from "../taskList";

export const TaskListContainer = () => {
  const { showPopup } = useShowPopup();
  const currentUserId = useCurrentUserId();
  const { error, taskData } = useTaskData();
  const {
    deleteCheckAble,
    deleteCheckFunc,
    deleteTaskFunc,
    isButtonDisabled,
    unDeleteCheckFunc,
  } = useTaskDelete(taskData);
  const { moveToEditTask } = useMoveToEditTask(taskData);

  if (error) throw error;
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
      showPopup={showPopup}
      taskData={taskData}
      unDeleteCheckFunc={unDeleteCheckFunc}
    />
  );
};
