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
        content: PropTypes.string,
        created_at: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.number,
        title: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.number,
      })
    ),
    likedTasksWithUser: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        created_at: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.number,
        title: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.number,
      })
    ),
    userBio: PropTypes.string,
    userNickName: PropTypes.string,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};