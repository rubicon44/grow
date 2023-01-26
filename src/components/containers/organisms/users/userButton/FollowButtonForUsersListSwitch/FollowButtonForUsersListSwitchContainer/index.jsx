import { useFollowAndUnFollowForUsersList } from 'hooks/useFollowAndUnFollowForUsersList';
import { FollowButtonForUsersListSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch';

export const FollowButtonForUsersListSwitchContainer = ({ followerId, username }) => {
  const { changeFollowButtonStyle, currentUserFollowings, currentUserId, currentUserName, isFollowing, isLoading, followFunc, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, setCurrentUserFollowings, unFollowFunc } = useFollowAndUnFollowForUsersList(followerId);
  return (
    isLoading ? (
      <FollowButtonForUsersListSwitch
        changeFollowButtonStyle={changeFollowButtonStyle}
        currentUserFollowings={currentUserFollowings}
        currentUserId={currentUserId}
        currentUserName={currentUserName}
        followFunc={followFunc}
        followerId={followerId}
        isFollowing={isFollowing}
        setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
        setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
        setCurrentUserFollowings={setCurrentUserFollowings}
        unFollowFunc={unFollowFunc}
        username={username}
      />
    ) : (
      <>ロード中です...</>
    )
  );
};