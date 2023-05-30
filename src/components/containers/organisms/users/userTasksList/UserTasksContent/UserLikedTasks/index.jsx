import PropTypes from "prop-types";
import { UserTasksAlreadyLikeList } from "../UserTasksAlreadyLikeList";
import { UserTasksNoLikeList } from "../UserTasksNoLikeList";

export const UserLikedTasks = ({ userData }) =>
  userData.likedTasks.length === 0 ? (
    <UserTasksNoLikeList userData={userData} />
  ) : (
    <UserTasksAlreadyLikeList userData={userData} />
  );

UserLikedTasks.propTypes = {
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
