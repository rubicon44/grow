import PropTypes from 'prop-types';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { TaskEditFormContainer } from 'components/containers/organisms/Tasks/TaskForm/TaskEditForm/TaskEditFormContainer';

export const TaskEditTemplate = (props) => {
  return (
    <MainWithHeader>
      <TaskEditFormContainer {...props}/>
    </MainWithHeader>
  );
};

TaskEditTemplate.defaultProps = {
  id: 0,
  title: '',
  content: '',
  start_date: '',
  end_date: '',
  status: 0,
  currentUserId: '',
};

TaskEditTemplate.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  status: PropTypes.number,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  currentUserId: PropTypes.string,
};