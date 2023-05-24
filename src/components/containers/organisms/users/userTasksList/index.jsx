import PropTypes from "prop-types";
import { LogOutButtonSwitchContainer } from "./LogOutButtonSwitchContainer";
import { UserTasksContent } from "./UserTasksContent";
import { UserTasksContentHeaderContainer } from "./UserTasksContentHeaderContainer";
import { Popup } from "../../../../presentational/atoms/Popup";

export const UserTasksList = (props) => {
  const { currentUserId } = props;
  const { setCheckUserNameChange, setUserData, userData, currentPath } = props;
  const { moveToFollowers, moveToFollowings } = props;
  const { showPopup } = props;
  return (
    <>
      <Popup message="タスクが正常に削除されました。" showPopup={showPopup} />
      <UserTasksContentHeaderContainer
        currentUserId={String(currentUserId)}
        moveToFollowers={moveToFollowers}
        moveToFollowings={moveToFollowings}
        setCheckUserNameChange={setCheckUserNameChange}
        setUserData={setUserData}
        userData={userData}
      />
      <UserTasksContent userData={userData} />
      <LogOutButtonSwitchContainer currentPath={currentPath} />
    </>
  );
};

UserTasksList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  moveToFollowers: PropTypes.func.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
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
  currentPath: PropTypes.string.isRequired,
};
