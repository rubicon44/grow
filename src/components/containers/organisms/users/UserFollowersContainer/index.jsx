import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useFollowers } from "../../../../../hooks/useFollowers";
import { UserFollowers } from "../UserFollowers";

export const UserFollowersContainer = () => {
  const currentUserId = useCurrentUserId();
  const { error, followers } = useFollowers();

  if (error) return <>Error...</>;
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
