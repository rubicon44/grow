import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useMoveToFollowers } from "../../../../../hooks/useMoveToFollowers";
import { useMoveToFollowings } from "../../../../../hooks/useMoveToFollowings";
import { useUserData } from "../../../../../hooks/useUserData";
import { useUserTasksContentTab } from "../../../../../hooks/useUserTasksContentTab";
import { ErrorMessage } from "../../common/ErrorMessage";
import { UserTasksList } from "../userTasksList";

// TODO: propTypesを修正(isRequiredではなくなるものが多くなる。)
export const UserTasksListContainer = () => {
  const { getErrorMessage } = useGetErrorMessage();
  const currentUserId = useCurrentUserId();
  const { activeTab, handleTabChange } = useUserTasksContentTab();
  const {
    error,
    outerElementTasksRef,
    setCheckUserNameChange,
    setUserData,
    userData,
    currentPathSegment,
  } = useUserData(activeTab);
  const { moveToFollowers } = useMoveToFollowers(userData);
  const { moveToFollowings } = useMoveToFollowings(userData);

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  if (userData === null) {
    return null;
  }
  return (
    <UserTasksList
      activeTab={activeTab}
      handleTabChange={handleTabChange}
      currentUserId={currentUserId}
      moveToFollowers={moveToFollowers}
      moveToFollowings={moveToFollowings}
      outerElementTasksRef={outerElementTasksRef}
      setCheckUserNameChange={setCheckUserNameChange}
      setUserData={setUserData}
      userData={userData}
      currentPathSegment={currentPathSegment}
    />
  );
};
