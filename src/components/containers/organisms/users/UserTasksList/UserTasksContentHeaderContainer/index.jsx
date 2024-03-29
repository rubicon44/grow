import PropTypes from "prop-types";
import { useGetErrorMessage } from "../../../../../../hooks/useGetErrorMessage";
import { useUserEdit } from "../../../../../../hooks/useUserEdit";
import { ErrorMessage } from "../../../common/ErrorMessage";
import { UserTasksContentHeader } from "../UserTasksContentHeader";

export const UserTasksContentHeaderContainer = (props) => {
  const { currentUserId } = props;
  const { setCheckUserNameChange, userData } = props;
  const { moveToFollowers, moveToFollowings } = props;
  const { getErrorMessage } = useGetErrorMessage();
  const {
    bioAble,
    changeUserNameCheckAble,
    changeUserNameFunc,
    editing,
    error,
    handleFileChange,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    revertUserBioFunc,
    setBioAbleFunc,
  } = useUserEdit(setCheckUserNameChange);

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  if (editing) return <>Editing...</>;
  return (
    <UserTasksContentHeader
      bioAble={bioAble}
      changeUserNameCheckAble={changeUserNameCheckAble}
      changeUserNameFunc={changeUserNameFunc}
      currentUserId={currentUserId}
      editing={editing}
      error={error}
      handleFileChange={handleFileChange}
      handleTextSubmit={handleTextSubmit}
      inputRefs={inputRefs}
      isButtonDisabled={isButtonDisabled}
      moveToFollowers={moveToFollowers}
      moveToFollowings={moveToFollowings}
      revertUserBioFunc={revertUserBioFunc}
      setBioAbleFunc={setBioAbleFunc}
      userData={userData}
    />
  );
};

UserTasksContentHeaderContainer.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
  moveToFollowers: PropTypes.func.isRequired,
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
