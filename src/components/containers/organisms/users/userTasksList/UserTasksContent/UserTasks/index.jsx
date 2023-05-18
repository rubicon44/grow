import PropTypes from "prop-types";
import { UserTasksAlreadyPostList } from "../UserTasksAlreadyPostList";
import { UserTasksNoPostList } from "../UserTasksNoPostList";

export const UserTasks = ({ userData }) => {
  return userData.tasks.length === 0 ? (
    <UserTasksNoPostList userData={userData} />
  ) : (
    <UserTasksAlreadyPostList userData={userData} />
  );
};

UserTasks.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    username: PropTypes.string,
  }).isRequired,
};
