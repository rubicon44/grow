import { UserFollowingsContainer } from './UserFollowingsContainer';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/Header/TitleWithBackArrowHeader';

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