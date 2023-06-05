import PropTypes from "prop-types";
import { useUserTasksContentTab } from "../../../../../../hooks/useUserTasksContentTab";
import { UserTasksContent } from "../UserTasksContent";

export const UserTasksContentContainer = ({ userData }) => {
  const { activeTab, handleTabChange } = useUserTasksContentTab();
  return (
    <UserTasksContent
      activeTab={activeTab}
      handleTabChange={handleTabChange}
      userData={userData}
    />
  );
};

UserTasksContentContainer.propTypes = {
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
