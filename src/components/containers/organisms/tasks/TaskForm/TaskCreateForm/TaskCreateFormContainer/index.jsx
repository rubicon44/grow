import { useTaskCreate } from 'hooks/useTaskCreate';
import { TaskCreateForm } from 'components/containers/organisms/Tasks/TaskForm/TaskCreateForm';

export const TaskCreateFormContainer = () => {
  const { handleTextSubmit, inputRefs, isButtonDisabled, loading, taskData } = useTaskCreate();
  if (loading) return <>Loading...</>;
  return <TaskCreateForm
           handleTextSubmit={handleTextSubmit}
           inputRefs={inputRefs}
           isButtonDisabled={isButtonDisabled}
           taskData={taskData}
         />;
};