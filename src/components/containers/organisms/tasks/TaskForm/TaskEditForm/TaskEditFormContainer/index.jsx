import { useTaskEdit } from 'hooks/useTaskEdit';
import { TaskEditForm } from 'components/containers/organisms/Tasks/TaskForm/TaskEditForm';

export const TaskEditFormContainer = ({ taskDataTask }) => {
  const { id } = taskDataTask;
  const [taskData, { handleTextSubmit, inputRef, load }] = useTaskEdit(id, taskDataTask);
  return (
    <>
      <TaskEditForm
        handleTextSubmit={handleTextSubmit}
        inputRef={inputRef}
        load={load}
        taskData={taskData}
      />
    </>
  );
};