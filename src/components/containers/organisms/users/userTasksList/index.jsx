import PropTypes from 'prop-types';
import { LogOutButtonSwitchContainer } from './LogOutButtonSwitchContainer';
import { UserTasksCheckReLoginWhenChangedUserId } from './UserTasksCheckReLoginWhenChangedUserId';
import { UserTasksContent } from './UserTasksContent';
import { UserTasksContentHeader } from './UserTasksContentHeader';
import { Popup } from '../../../../presentational/atoms/Popup';

export const UserTasksList = (props) => {
  const { currentUserId } = props;
  const { bioAble, changeUserNameCheckAble, changeUserNameFunc, editing, error, handleTextSubmit, inputRefs, isButtonDisabled, loading, revertUserBioFunc, setBioAbleFunc, userData, userNameInUrl } = props;
  const { moveToFollowers, moveToFollowings, moveToGanttChart } = props;
  const { showPopup } = props;

  return (
    <>
      <Popup message="タスクが正常に削除されました。" showPopup={showPopup} />
      {changeUserNameCheckAble === true && (<UserTasksCheckReLoginWhenChangedUserId changeUserNameFunc={changeUserNameFunc} revertUserBioFunc={revertUserBioFunc} />)}
      <UserTasksContentHeader
        bioAble={bioAble}
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

UserTasksList.propTypes = {
  bioAble: PropTypes.bool.isRequired,
  changeUserNameCheckAble: PropTypes.bool.isRequired,
  changeUserNameFunc: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  error: PropTypes.bool,
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.object.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  moveToFollowers: PropTypes.func.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
  moveToGanttChart: PropTypes.func.isRequired,
  revertUserBioFunc: PropTypes.func.isRequired,
  setBioAbleFunc: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    taskUser: PropTypes.shape({
      bio: PropTypes.string,
      id: PropTypes.number,
      nickname: PropTypes.string,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string,
          created_at: PropTypes.string,
          id: PropTypes.number,
          status: PropTypes.number,
          title: PropTypes.string,
          updated_at: PropTypes.string,
          user_id: PropTypes.number,
        })
      ),
      username: PropTypes.string,
    }),
    userTasks: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        created_at: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.number,
        title: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.number,
      })
    ).isRequired,
    likedTasksWithUser: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        created_at: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.number,
        title: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.number,
      })
    ),
    userBio: PropTypes.string,
    userNickName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
  userNameInUrl: PropTypes.string.isRequired,
};