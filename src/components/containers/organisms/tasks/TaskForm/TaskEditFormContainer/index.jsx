import PropTypes from "prop-types";
import { useTaskEdit } from "../../../../../../hooks/useTaskEdit";
import { TaskEditForm } from "../TaskEditForm";

export const TaskEditFormContainer = ({ taskDataTask }) => {
  const { editing, handleTextSubmit, inputRefs, isButtonDisabled, taskData } =
    useTaskEdit(taskDataTask);
  if (editing) return <>Editing...</>;
  return (
    <TaskEditForm
      handleTextSubmit={handleTextSubmit}
      inputRefs={inputRefs}
      isButtonDisabled={isButtonDisabled}
      taskData={taskData}
    />
  );
};

TaskEditFormContainer.propTypes = {
  taskDataTask: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string,
    endDate: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  taskData: PropTypes.shape({
    task: PropTypes.shape({
      content: PropTypes.string,
      endDate: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
};
