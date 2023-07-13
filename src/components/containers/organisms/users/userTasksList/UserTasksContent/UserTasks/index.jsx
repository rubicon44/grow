import PropTypes from "prop-types";
import { UserTasksAlreadyPostList } from "../UserTasksAlreadyPostList";
import { UserTasksNoPostList } from "../UserTasksNoPostList";

export const UserTasks = ({ outerElementTasksRef, userData }) =>
  userData.tasks.length === 0 ? (
    <UserTasksNoPostList userData={userData} />
  ) : (
    <UserTasksAlreadyPostList
      outerElementTasksRef={outerElementTasksRef}
      userData={userData}
    />
  );

UserTasks.defaultProps = {
  outerElementTasksRef: null,
};

UserTasks.propTypes = {
  outerElementTasksRef: PropTypes.objectOf(PropTypes.instanceOf(Element)),
  userData: PropTypes.shape({
    id: PropTypes.string,
    avatarUrl: PropTypes.string,
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
