import PropTypes from "prop-types";
import { useGetErrorMessage } from "../../../../../../hooks/useGetErrorMessage";
import { useTaskEdit } from "../../../../../../hooks/useTaskEdit";
import { ErrorMessage } from "../../../../pages/staticPages/ErrorMessage";
import { TaskEditForm } from "../TaskEditForm";

export const TaskEditFormContainer = ({ taskDataTask }) => {
  const { getErrorMessage } = useGetErrorMessage();
  const {
    editing,
    error,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    taskData,
  } = useTaskEdit(taskDataTask);

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
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

TaskEditFormContainer.defaultProps = {
  taskData: {},
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
