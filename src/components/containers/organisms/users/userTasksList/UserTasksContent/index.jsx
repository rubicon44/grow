import PropTypes from "prop-types";
import { UserTasksContentTab } from "./UserTasksContentTab";
import { UserTasksContentList } from "./UserTasksContentList";

export const UserTasksContent = ({ activeTab, handleTabChange, userData }) => (
  <>
    {/* todo: タスクタブ内のタスクをいいねした際、いいねタブ内のタスクを即座に更新するか検討。 */}
    <UserTasksContentTab
      activeTab={activeTab}
      handleTabChange={handleTabChange}
    />
    <UserTasksContentList activeTab={activeTab} userData={userData} />
  </>
);

UserTasksContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
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
