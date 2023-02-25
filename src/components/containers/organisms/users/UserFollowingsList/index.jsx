import { UserFollowingsContainer } from 'components/containers/organisms/Users/UserFollowingsList/UserFollowingsContainer';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const UserFollowingsList = ({ currentUserId, error, followings, loading, username }) => {
  return (
    <>
      <TitleWithBackArrowHeader>フォロー中</TitleWithBackArrowHeader>
      <UserFollowingsContainer
        currentUserId={currentUserId}
        error={error}
        followings={followings}
        loading={loading}
        username={username}
      />
    </>
  );
};