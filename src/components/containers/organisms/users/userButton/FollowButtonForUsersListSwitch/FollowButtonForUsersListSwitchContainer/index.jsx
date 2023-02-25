import { useFollowAndUnFollow } from 'hooks/useFollowAndUnFollow';
import { FollowButtonForUsersListSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch';

export const FollowButtonForUsersListSwitchContainer = ({ userIdToFollowOrUnFollow, username }) => {
  const { changeFollowButtonStyle, currentUserFollowings, currentUserId, currentUserName, isFollowing, isLoading, followFunc, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, setCurrentUserFollowings, unFollowFunc } = useFollowAndUnFollow(userIdToFollowOrUnFollow);

  return (
    isLoading ? (
      <FollowButtonForUsersListSwitch
        changeFollowButtonStyle={changeFollowButtonStyle}
        currentUserFollowings={currentUserFollowings}
        currentUserId={currentUserId}
        currentUserName={currentUserName}
        followFunc={followFunc}
        isFollowing={isFollowing}
        setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
        setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
        setCurrentUserFollowings={setCurrentUserFollowings}
        unFollowFunc={unFollowFunc}
        userIdToFollowOrUnFollow={userIdToFollowOrUnFollow}
        username={username}
      />
    ) : (
      <>ロード中です...</>
    )
  );
};