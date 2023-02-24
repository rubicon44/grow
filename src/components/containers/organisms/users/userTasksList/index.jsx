import { LogOutButtonSwitchContainer } from 'components/containers/organisms/Users/UserTasksList/LogOutButtonSwitch/LogOutButtonSwitchContainer';
import { UserTasksCheckReLoginWhenChangedUserId } from 'components/containers/organisms/Users/UserTasksList/UserTasksCheckReLoginWhenChangedUserId';
import { UserTasksContent } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent';
import { UserTasksContentHeader } from 'components/containers/organisms/Users/UserTasksList/UserTasksContentHeader';
import { Popup } from 'components/presentational/atoms/Popup';

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