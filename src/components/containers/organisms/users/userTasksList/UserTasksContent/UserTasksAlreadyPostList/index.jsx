import PropTypes from "prop-types";
import { TaskListItem } from "../../../../tasks/ui/TaskListItem";

export const UserTasksAlreadyPostList = ({ userData }) =>
  userData.tasks.map((task) => <TaskListItem task={task} key={task.id} />);

UserTasksAlreadyPostList.propTypes = {
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
        user: PropTypes.shape({
          id: PropTypes.number,
          bio: PropTypes.string,
          email: PropTypes.string,
          nickname: PropTypes.string,
          username: PropTypes.string,
        }),
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
        user: PropTypes.shape({
          id: PropTypes.number,
          bio: PropTypes.string,
          email: PropTypes.string,
          nickname: PropTypes.string,
          username: PropTypes.string,
        }),
      })
    ),
    username: PropTypes.string,
  }).isRequired,
};
