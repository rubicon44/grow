import { memo } from "react";
import PropTypes from "prop-types";
import { TaskForm } from "..";
import { TitleWithBackArrowHeader } from "../../../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TaskCreateForm = ({
  handleTextSubmit,
  inputRefs,
  isButtonDisabled,
  taskData,
}) => {
  const MemoTaskForm = memo(TaskForm);
  return (
    <>
      <TitleWithBackArrowHeader>新規登録</TitleWithBackArrowHeader>
      <MemoTaskForm
        handleTextSubmit={handleTextSubmit}
        inputRefs={inputRefs}
        isButtonDisabled={isButtonDisabled}
        taskData={taskData}
      />
    </>
  );
};

TaskCreateForm.propTypes = {
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    contentRef: PropTypes.object.isRequired,
    endDateRef: PropTypes.object.isRequired,
    startDateRef: PropTypes.object.isRequired,
    statusRef: PropTypes.object.isRequired,
    titleRef: PropTypes.object.isRequired,
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
