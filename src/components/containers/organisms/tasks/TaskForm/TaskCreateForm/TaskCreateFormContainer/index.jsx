import { useTaskCreate } from 'hooks/useTaskCreate';
import { TaskCreateForm } from 'components/containers/organisms/Tasks/TaskForm/TaskCreateForm';

export const TaskCreateFormContainer = () => {
  const { handleTextSubmit, inputRefs, isButtonDisabled, taskData } = useTaskCreate();
  return <TaskCreateForm
           handleTextSubmit={handleTextSubmit}
           inputRefs={inputRefs}
           isButtonDisabled={isButtonDisabled}
           taskData={taskData}
         />;
};