import { LogOutButtonSwitchContainer } from 'components/containers/organisms/Users/UserTasksList/LogOutButtonSwitch/LogOutButtonSwitchContainer';
import { UserTasksCheckReLoginWhenChangedUserId } from 'components/containers/organisms/Users/UserTasksList/UserTasksCheckReLoginWhenChangedUserId';
import { UserTasksContent } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent';
import { UserTasksContentHeader } from 'components/containers/organisms/Users/UserTasksList/UserTasksContentHeader';
import { Popup } from 'components/presentational/atoms/Popup';

export const UserTasksList = (props) => {
  const { currentUserId } = props;
  const { bioAble, changeUserNameCheckAble, changeUserNameFunc, handleTextSubmit, isButtonDisabled, nextFollowersFunc, nextFollowingsFunc, nextGanttFunc, revertUserBioFunc, setBioAbleFunc, setUserBioFunc, setUserNameFunc, setUserNickNameFunc, unChangeUserNameFunc, userData, likedTasksWithUser, userNameInUrl } = props;
  const { showPopup } = props;
  return (
    <>
      <Popup message="タスクが正常に削除されました。" duration={3000} showPopup={showPopup} />
      {changeUserNameCheckAble === true && (<UserTasksCheckReLoginWhenChangedUserId changeUserNameFunc={changeUserNameFunc} unChangeUserNameFunc={unChangeUserNameFunc} />)}
      <UserTasksContentHeader
        bioAble={bioAble}
        currentUserId={String(currentUserId)}
        handleTextSubmit={handleTextSubmit}
        isButtonDisabled={isButtonDisabled}
        nextFollowersFunc={nextFollowersFunc}
        nextFollowingsFunc={nextFollowingsFunc}
        revertUserBioFunc={revertUserBioFunc}
        setBioAbleFunc={setBioAbleFunc}
        setUserBioFunc={setUserBioFunc}
        setUserNameFunc={setUserNameFunc}
        setUserNickNameFunc={setUserNickNameFunc}
        title={userData.userNickName}
        userData={userData}
      />
      <UserTasksContent
        nextGanttFunc={nextGanttFunc}
        userData={userData}
        likedTasksWithUser={likedTasksWithUser}
      />
      <LogOutButtonSwitchContainer userNameInUrl={userNameInUrl} />
    </>
  );
};