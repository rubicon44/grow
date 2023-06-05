import PropTypes from "prop-types";
import { LogOutButtonSwitchContainer } from "./LogOutButtonSwitchContainer";
import { UserTasksContentContainer } from "./UserTasksContentContainer";
import { UserTasksContentHeaderContainer } from "./UserTasksContentHeaderContainer";
import { PopupContainer } from "../../tasks/ui/PopupContainer";
import { TitleWithBackArrowHeader } from "../../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserTasksList = (props) => {
  const { currentUserId } = props;
  const { setCheckUserNameChange, setUserData, userData, currentPathSegment } =
    props;
  const { moveToFollowers, moveToFollowings } = props;
  return (
    <>
      <PopupContainer message="タスクが正常に削除されました。" />
      <TitleWithBackArrowHeader title={userData.nickname} />
      <UserTasksContentHeaderContainer
        currentUserId={currentUserId}
        moveToFollowers={moveToFollowers}
        moveToFollowings={moveToFollowings}
        setCheckUserNameChange={setCheckUserNameChange}
        setUserData={setUserData}
        userData={userData}
      />
      <UserTasksContentContainer userData={userData} />
      <LogOutButtonSwitchContainer currentPathSegment={currentPathSegment} />
    </>
  );
};

UserTasksList.defaultProps = {
  currentPathSegment: null,
};

UserTasksList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  moveToFollowers: PropTypes.func.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
  setCheckUserNameChange: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
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
  currentPathSegment: PropTypes.string,
};
