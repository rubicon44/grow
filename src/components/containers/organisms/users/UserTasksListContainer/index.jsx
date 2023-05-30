import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useMoveToFollowers } from "../../../../../hooks/useMoveToFollowers";
import { useMoveToFollowings } from "../../../../../hooks/useMoveToFollowings";
import { useUserData } from "../../../../../hooks/useUserData";
import { UserTasksList } from "../userTasksList";

export const UserTasksListContainer = () => {
  const currentUserId = useCurrentUserId();
  const {
    error,
    setCheckUserNameChange,
    setUserData,
    userData,
    currentPathSegment,
  } = useUserData();
  const { moveToFollowers } = useMoveToFollowers(userData);
  const { moveToFollowings } = useMoveToFollowings(userData);

  if (error) return <>Error...</>;
  if (userData === null) {
    return null;
  }
  return (
    <UserTasksList
      currentUserId={currentUserId}
      moveToFollowers={moveToFollowers}
      moveToFollowings={moveToFollowings}
      setCheckUserNameChange={setCheckUserNameChange}
      setUserData={setUserData}
      userData={userData}
      currentPathSegment={currentPathSegment}
    />
  );
};
