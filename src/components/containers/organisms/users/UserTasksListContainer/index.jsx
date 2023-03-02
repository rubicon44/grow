import { useCurrentUserId } from '../../../../../hooks/useCurrentUserId';
import { useMoveToFollowers } from '../../../../../hooks/useMoveToFollowers';
import { useMoveToFollowings } from '../../../../../hooks/useMoveToFollowings';
import { useMoveToGanttChart } from '../../../../../hooks/useMoveToGanttChart';
import { useShowPopup } from '../../../../../hooks/useShowPopup';
import { useUserData } from '../../../../../hooks/useUserData';
import { useUserEdit } from '../../../../../hooks/useUserEdit';
import { UserTasksList } from '../UserTasksList';

export const UserTasksListContainer = () => {
  const { showPopup } = useShowPopup();
  const currentUserId = useCurrentUserId();
  const { error, loading, setCheckUserNameChange, setUserData, userData, userNameInUrl } = useUserData();
  const { bioAble, changeUserNameCheckAble, changeUserNameFunc, editing, handleTextSubmit, inputRefs, isButtonDisabled, revertUserBioFunc, setBioAbleFunc } = useUserEdit(setCheckUserNameChange, setUserData, userData);
  const { moveToFollowers } = useMoveToFollowers(userData);
  const { moveToFollowings } = useMoveToFollowings(userData);
  const { moveToGanttChart } = useMoveToGanttChart(userData);

  return (
    <UserTasksList
      bioAble={bioAble}
      changeUserNameCheckAble={changeUserNameCheckAble}
      changeUserNameFunc={changeUserNameFunc}
      currentUserId={currentUserId}
      editing={editing}
      error={error}
      handleTextSubmit={handleTextSubmit}
      inputRefs={inputRefs}
      isButtonDisabled={isButtonDisabled}
      loading={loading}
      moveToFollowers={moveToFollowers}
      moveToFollowings={moveToFollowings}
      moveToGanttChart={moveToGanttChart}
      revertUserBioFunc={revertUserBioFunc}
      setBioAbleFunc={setBioAbleFunc}
      showPopup={showPopup}
      userData={userData}
      userNameInUrl={userNameInUrl}
     />
  );
};