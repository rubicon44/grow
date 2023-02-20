import { useTaskEdit } from 'hooks/useTaskEdit';
import { TaskEditForm } from 'components/containers/organisms/Tasks/TaskForm/TaskEditForm';

export const TaskEditFormContainer = ({ taskDataTask }) => {
  const { id } = taskDataTask;
  const { handleTextSubmit, inputRef, isButtonDisabled, taskData } = useTaskEdit(id, taskDataTask);
  return <TaskEditForm
           handleTextSubmit={handleTextSubmit}
           inputRef={inputRef}
           isButtonDisabled={isButtonDisabled}
           taskData={taskData}
         />;
};