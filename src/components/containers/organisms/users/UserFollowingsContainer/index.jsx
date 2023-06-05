import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useFollowings } from "../../../../../hooks/useFollowings";
import { ErrorMessage } from "../../../pages/staticPages/ErrorMessage";
import { UserFollowings } from "../UserFollowings";

export const UserFollowingsContainer = () => {
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const { error, followings } = useFollowings();

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  if (followings === null) {
    return null;
  }
  return (
    <UserFollowings currentUserId={currentUserId} followings={followings} />
  );
};
