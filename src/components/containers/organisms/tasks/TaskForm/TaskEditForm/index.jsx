import PropTypes from 'prop-types';
import { TaskForm } from 'components/containers/organisms/Tasks/TaskForm';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const TaskEditForm = ({ handleTextSubmit, inputRef, load, taskData }) => {
  return (
    <>
      <TitleWithBackArrowHeader>編集</TitleWithBackArrowHeader>
      <TaskForm
        handleTextSubmit={handleTextSubmit}
        inputRef={inputRef}
        load={load}
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