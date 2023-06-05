import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useMoveToFollowers } from "../../../../../hooks/useMoveToFollowers";
import { useMoveToFollowings } from "../../../../../hooks/useMoveToFollowings";
import { useUserData } from "../../../../../hooks/useUserData";
import { ErrorMessage } from "../../../pages/staticPages/ErrorMessage";
import { UserTasksList } from "../userTasksList";

export const UserTasksListContainer = () => {
  const { getErrorMessage } = useGetErrorMessage();
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

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
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
