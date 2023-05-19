import PropTypes from "prop-types";
import { LogOutButtonSwitchContainer } from "./LogOutButtonSwitchContainer";
import { UserTasksContent } from "./UserTasksContent";
import { UserTasksContentHeaderContainer } from "./UserTasksContentHeaderContainer";
import { Popup } from "../../../../presentational/atoms/Popup";

export const UserTasksList = (props) => {
  const { currentUserId } = props;
  const {
    error,
    loading,
    setCheckUserNameChange,
    setUserData,
    userData,
    userNameInUrl,
  } = props;
  const { moveToFollowers, moveToFollowings, moveToGanttChart } = props;
  const { showPopup } = props;
  return (
    <>
      <Popup message="タスクが正常に削除されました。" showPopup={showPopup} />
      <UserTasksContentHeaderContainer
        currentUserId={String(currentUserId)}
        error={error}
        loading={loading}
        moveToFollowers={moveToFollowers}
        moveToFollowings={moveToFollowings}
        setCheckUserNameChange={setCheckUserNameChange}
        setUserData={setUserData}
        userData={userData}
      />
      <UserTasksContent
        error={error}
        loading={loading}
        moveToGanttChart={moveToGanttChart}
        userData={userData}
      />
      <LogOutButtonSwitchContainer userNameInUrl={userNameInUrl} />
    </>
  );
};

UserTasksList.defaultProps = {
  error: false,
  loading: false,
};

UserTasksList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  moveToFollowers: PropTypes.func.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
  moveToGanttChart: PropTypes.func.isRequired,
  setCheckUserNameChange: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
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
  userNameInUrl: PropTypes.string.isRequired,
};
