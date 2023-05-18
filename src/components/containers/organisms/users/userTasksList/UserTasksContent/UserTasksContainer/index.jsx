import PropTypes from "prop-types";
import { UserTasks } from "../UserTasks";

export const UserTasksContainer = ({ error, loading, userData }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <UserTasks userData={userData} />;
};

UserTasksContainer.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
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
