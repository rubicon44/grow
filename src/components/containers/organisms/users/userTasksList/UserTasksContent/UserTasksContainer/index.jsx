import PropTypes from 'prop-types';
import { UserTasks } from '../UserTasks';

export const UserTasksContainer = ({ error, loading, userData }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <UserTasks userData={userData} />;
};

UserTasksContainer.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  userData: PropTypes.shape({
    userTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    likedTasksWithUser: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    userBio: PropTypes.string,
    userNickName: PropTypes.string,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};