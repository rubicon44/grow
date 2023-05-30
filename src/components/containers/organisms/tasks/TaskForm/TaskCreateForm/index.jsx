import PropTypes from "prop-types";
import { TaskForm } from "..";

export const TaskCreateForm = ({
  handleTextSubmit,
  inputRefs,
  isButtonDisabled,
  taskData,
}) => (
  <TaskForm
    handleTextSubmit={handleTextSubmit}
    inputRefs={inputRefs}
    isButtonDisabled={isButtonDisabled}
    taskData={taskData}
  />
);

TaskCreateForm.propTypes = {
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    contentRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    endDateRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    startDateRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    statusRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    titleRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  taskData: PropTypes.shape({
    task: PropTypes.shape({
      content: PropTypes.string,
      endDate: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
