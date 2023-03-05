import { UserFollowersContainer } from './userFollowersContainer';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/header/titleWithBackArrowHeader';

export const UserFollowersList = ({ currentUserId, error, followers, loading, username }) => {
  return (
    <>
      <TitleWithBackArrowHeader>フォロワー</TitleWithBackArrowHeader>
      <UserFollowersContainer
        currentUserId={currentUserId}
        error={error}
        followers={followers}
        loading={loading}
        username={username}
      />
    </>
  );
};