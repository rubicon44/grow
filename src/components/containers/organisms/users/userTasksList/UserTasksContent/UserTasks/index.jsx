import PropTypes from 'prop-types';
import { UserTasksAlreadyPostList } from '../UserTasksAlreadyPostList';
import { UserTasksNoPostList } from '../UserTasksNoPostList';

export const UserTasks = ({ userData }) => {
  return (
    userData.userTasks.length === 0 ? (
      <UserTasksNoPostList userData={userData} />
    ) : (
      <UserTasksAlreadyPostList userData={userData} />
    )
  );
};

UserTasks.propTypes = {
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
    likedTasks: PropTypes.arrayOf(PropTypes.shape({
      task: PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        end_date: PropTypes.string,
        start_date: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      }),
    })),
    userBio: PropTypes.string,
    userNickName: PropTypes.string,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};