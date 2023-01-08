import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useUserTasksData } from 'hooks/useUserTasksData';
import { UserTasksList } from 'components/containers/organisms/Users/UserTasksList';

export const UserTasksListContainer = () => {
  const currentUserId = useCurrentUserId();
  const { bioAble, changeUserNameCheckAble, changeUserNameFunc, handleTextSubmit, load, nextFollowersFunc, nextFollowingsFunc, nextGanttFunc, revertUserBioFunc, setBioAbleFunc, setUserBioFunc, setUserNameFunc, setUserNickNameFunc, unChangeUserNameFunc, userData, likedTasksWithUser, userNameInUrl } = useUserTasksData();
  return (
    <UserTasksList
      bioAble={bioAble}
      changeUserNameCheckAble={changeUserNameCheckAble}
      changeUserNameFunc={changeUserNameFunc}
      currentUserId={currentUserId}
      handleTextSubmit={handleTextSubmit}
      load={load}
      nextFollowersFunc={nextFollowersFunc}
      nextFollowingsFunc={nextFollowingsFunc}
      nextGanttFunc={nextGanttFunc}
      revertUserBioFunc={revertUserBioFunc}
      setBioAbleFunc={setBioAbleFunc}
      setUserBioFunc={setUserBioFunc}
      setUserNameFunc={setUserNameFunc}
      setUserNickNameFunc={setUserNickNameFunc}
      unChangeUserNameFunc={unChangeUserNameFunc}
      userData={userData}
      likedTasksWithUser={likedTasksWithUser}
      userNameInUrl={userNameInUrl}
     />
  );
};