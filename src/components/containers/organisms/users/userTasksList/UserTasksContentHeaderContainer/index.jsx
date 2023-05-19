import PropTypes from "prop-types";
import { useUserEdit } from "../../../../../../hooks/useUserEdit";
import { UserTasksContentHeader } from "../UserTasksContentHeader";

export const UserTasksContentHeaderContainer = (props) => {
  const { currentUserId } = props;
  const { error, loading, setCheckUserNameChange, setUserData, userData } =
    props;
  const { moveToFollowers, moveToFollowings } = props;
  const {
    bioAble,
    changeUserNameCheckAble,
    changeUserNameFunc,
    editing,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    revertUserBioFunc,
    setBioAbleFunc,
  } = useUserEdit(setCheckUserNameChange, setUserData, userData);

  // todo: userData取得時のerrorとの競合の解決。
  if (editing) return <>Editing...</>;
  return (
    <UserTasksContentHeader
      bioAble={bioAble}
      changeUserNameCheckAble={changeUserNameCheckAble}
      changeUserNameFunc={changeUserNameFunc}
      currentUserId={String(currentUserId)}
      editing={editing}
      error={error}
      handleTextSubmit={handleTextSubmit}
      inputRefs={inputRefs}
      isButtonDisabled={isButtonDisabled}
      loading={loading}
      moveToFollowers={moveToFollowers}
      moveToFollowings={moveToFollowings}
      revertUserBioFunc={revertUserBioFunc}
      setBioAbleFunc={setBioAbleFunc}
      userData={userData}
    />
  );
};

UserTasksContentHeaderContainer.defaultProps = {
  error: false,
  loading: false,
};

UserTasksContentHeaderContainer.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  currentUserId: PropTypes.string.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
  moveToFollowers: PropTypes.func.isRequired,
  setCheckUserNameChange: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
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
