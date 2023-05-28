import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useFollowings } from "../../../../../hooks/useFollowings";
import { UserFollowings } from "../UserFollowings";

export const UserFollowingsContainer = () => {
  const currentUserId = useCurrentUserId();
  const { error, followings } = useFollowings();

  if (error) return <>Error...</>;
  if (followings === null) {
    return null;
  }
  return (
    <UserFollowings currentUserId={currentUserId} followings={followings} />
  );
};
