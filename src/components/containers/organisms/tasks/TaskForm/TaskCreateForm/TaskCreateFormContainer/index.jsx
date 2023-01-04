import { useTaskCreate } from 'hooks/useTaskCreate';
import { TaskCreateForm } from 'components/containers/organisms/Tasks/TaskForm/TaskCreateForm';

export const TaskCreateFormContainer = () => {
  const [taskData, { handleTextSubmit, inputRef, load }] = useTaskCreate();
  return <TaskCreateForm
           handleTextSubmit={handleTextSubmit}
           inputRef={inputRef}
           load={load}
           taskData={taskData}
         />;
};