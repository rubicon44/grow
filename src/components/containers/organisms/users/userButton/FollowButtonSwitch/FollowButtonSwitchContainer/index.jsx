import { useFollowAndUnFollow } from 'hooks/useFollowAndUnFollow';
import { useUserData } from 'hooks/useUserData';
import { FollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonSwitch';

export const FollowButtonSwitchContainer = () => {
  const { userData } = useUserData();
  const userIdToFollowOrUnFollow = userData.userId;
  const { changeFollowButtonStyle, currentUserId, followFunc, isFollowing, isLoading, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc } = useFollowAndUnFollow(userIdToFollowOrUnFollow);

  return (
    isLoading ? (
      <FollowButtonSwitch
        changeFollowButtonStyle={changeFollowButtonStyle}
        currentUserId={currentUserId}
        followFunc={followFunc}
        isFollowing={isFollowing}
        isLoading={isLoading}
        setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
        setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
        unFollowFunc={unFollowFunc}
        userIdToFollowOrUnFollow={userIdToFollowOrUnFollow}
      />
    ) : (
      <>ロード中です...</>
    )
  );
};