import { UserFollowingsContainer } from './userFollowingsContainer';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/header/titleWithBackArrowHeader';

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