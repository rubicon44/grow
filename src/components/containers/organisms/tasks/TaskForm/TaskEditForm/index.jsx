import PropTypes from 'prop-types';
import { TaskForm } from 'components/containers/organisms/Tasks/TaskForm';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const TaskEditForm = ({ handleTextSubmit, inputRefs, isButtonDisabled, taskData }) => {
  return (
    <>
      <TitleWithBackArrowHeader>編集</TitleWithBackArrowHeader>
      <TaskForm
        handleTextSubmit={handleTextSubmit}
        inputRefs={inputRefs}
        isButtonDisabled={isButtonDisabled}
        taskData={taskData}
      />
    </>
  );
};

TaskEditForm.defaultProps = {
  id: 0,
  title: '',
  content: '',
  status: 0,
  currentUserId: '',
};

TaskEditForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  status: PropTypes.number,
  currentUserId: PropTypes.string,
};