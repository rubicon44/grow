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
      <Popup message="タスクが正常に削除されました。" duration={3000} showPopup={showPopup} />
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