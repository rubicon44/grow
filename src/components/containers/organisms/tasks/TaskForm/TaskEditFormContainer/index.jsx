import { useTaskEdit } from '../../../../../../hooks/useTaskEdit';
import { TaskEditForm } from '../TaskEditForm';

export const TaskEditFormContainer = ({ taskDataTask }) => {
  const { editing, handleTextSubmit, inputRefs, isButtonDisabled, taskData } = useTaskEdit(taskDataTask);
  if (editing) return <>Editing...</>;
  return <TaskEditForm
           handleTextSubmit={handleTextSubmit}
           inputRefs={inputRefs}
           isButtonDisabled={isButtonDisabled}
           taskData={taskData}
         />;
};