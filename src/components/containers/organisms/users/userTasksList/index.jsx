import PropTypes from "prop-types";
import { UserTasksContent } from "./UserTasksContent";
import { UserTasksContentHeaderContainer } from "./UserTasksContentHeaderContainer";
import { PopupContainer } from "../../tasks/ui/PopupContainer";
import { TitleWithBackArrowHeader } from "../../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserTasksList = (props) => {
  const { activeTab, handleTabChange } = props;
  const { currentUserId } = props;
  const { outerElementTasksRef, setCheckUserNameChange, userData } = props;
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
        userData={userData}
      />
      <UserTasksContent
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        outerElementTasksRef={outerElementTasksRef}
        userData={userData}
      />
    </>
  );
};

UserTasksList.defaultProps = {
  outerElementTasksRef: null,
};

UserTasksList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  moveToFollowers: PropTypes.func.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
  outerElementTasksRef: PropTypes.objectOf(PropTypes.instanceOf(Element)),
  setCheckUserNameChange: PropTypes.func.isRequired,
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
