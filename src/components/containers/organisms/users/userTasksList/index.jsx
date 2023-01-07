import { LogOutButtonSwitchContainer } from 'components/containers/organisms/Users/UserTasksList/LogOutButtonSwitch/LogOutButtonSwitchContainer';
import { UserTasksCheckReLoginWhenChangedUserId } from 'components/containers/organisms/Users/UserTasksList/UserTasksCheckReLoginWhenChangedUserId';
import { UserTasksContent } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent';
import { UserTasksContentHeader } from 'components/containers/organisms/Users/UserTasksList/UserTasksContentHeader';

export const UserTasksList = (props) => {
  const { currentUserId } = props;
  const { bioAble, changeUserNameCheckAble, changeUserNameFunc, handleTextSubmit, load, nextFollowersFunc, nextFollowingsFunc, nextGanttFunc, revertUserBioFunc, setBioAbleFunc, setUserBioFunc, setUserNameFunc, setUserNickNameFunc, unChangeUserNameFunc, userData, userNameInUrl } = props;
  return (
    <>
      {changeUserNameCheckAble === true && (<UserTasksCheckReLoginWhenChangedUserId changeUserNameFunc={changeUserNameFunc} unChangeUserNameFunc={unChangeUserNameFunc} />)}
      <UserTasksContentHeader
        bioAble={bioAble}
        currentUserId={String(currentUserId)}
        handleTextSubmit={handleTextSubmit}
        load={load}
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
      />
      <LogOutButtonSwitchContainer userNameInUrl={userNameInUrl} />
    </>
  );
};