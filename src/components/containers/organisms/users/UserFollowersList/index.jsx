import { UserFollowersContainer } from 'components/containers/organisms/Users/UserFollowersList/UserFollowersContainer';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

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