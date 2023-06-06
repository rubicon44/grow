import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useFollowers } from "../../../../../hooks/useFollowers";
import { ErrorMessage } from "../../common/ErrorMessage";
import { UserFollowers } from "../UserFollowers";

export const UserFollowersContainer = () => {
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const { error, followers } = useFollowers();

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  if (followers === null) {
    return null;
  }
  return (
    <UserFollowers
      currentUserId={currentUserId}
      error={error}
      followers={followers}
    />
  );
};
