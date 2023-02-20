import { useTaskCreate } from 'hooks/useTaskCreate';
import { TaskCreateForm } from 'components/containers/organisms/Tasks/TaskForm/TaskCreateForm';

export const TaskCreateFormContainer = () => {
  const { handleTextSubmit, inputRef, isButtonDisabled, taskData } = useTaskCreate();
  return <TaskCreateForm
           handleTextSubmit={handleTextSubmit}
           inputRef={inputRef}
           isButtonDisabled={isButtonDisabled}
           taskData={taskData}
         />;
};