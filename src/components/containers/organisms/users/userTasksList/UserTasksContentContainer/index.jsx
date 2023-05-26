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
