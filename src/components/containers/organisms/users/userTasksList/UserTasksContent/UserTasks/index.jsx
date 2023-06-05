import PropTypes from "prop-types";
import { UserTasksAlreadyPostList } from "../UserTasksAlreadyPostList";
import { UserTasksNoPostList } from "../UserTasksNoPostList";

export const UserTasks = ({ userData }) =>
  userData.tasks.length === 0 ? (
    <UserTasksNoPostList userData={userData} />
  ) : (
    <UserTasksAlreadyPostList userData={userData} />
  );

UserTasks.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        userId: PropTypes.string,
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
        id: PropTypes.string,
        userId: PropTypes.string,
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
