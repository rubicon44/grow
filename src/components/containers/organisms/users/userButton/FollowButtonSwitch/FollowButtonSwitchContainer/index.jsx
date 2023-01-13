import { useFollowAndUnFollow } from 'hooks/useFollowAndUnFollow';
import { FollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonSwitch';

export const FollowButtonSwitchContainer = () => {
  const { changeFollowButtonStyle, currentUserId, followerId, followFunc, isFollowing, isLoading, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc } = useFollowAndUnFollow();
  return (
    isLoading ? (
      <FollowButtonSwitch
        changeFollowButtonStyle={changeFollowButtonStyle}
        currentUserId={currentUserId}
        followerId={followerId}
        followFunc={followFunc}
        isFollowing={isFollowing}
        isLoading={isLoading}
        setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
        setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
        unFollowFunc={unFollowFunc}
      />
    ) : (
      <>ロード中です...</>
    )
  );
};