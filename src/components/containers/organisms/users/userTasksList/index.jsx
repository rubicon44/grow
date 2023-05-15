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
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
    })),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
    })),
    username: PropTypes.string,
  }).isRequired,
  userNameInUrl: PropTypes.string.isRequired,
};