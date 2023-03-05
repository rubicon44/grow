import { FollowButton } from '../followButton';
import { FollowingOrUnFollowButtonSwitch } from '../FollowingOrUnFollowButtonSwitch';

export const FollowButtonSwitch = ({ changeFollowButtonStyle, currentUserId, followFunc, isFollowing, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc, userIdToFollowOrUnFollow }) => {
  if (String(currentUserId) === String(userIdToFollowOrUnFollow)) return null;
  if (!isFollowing) return <FollowButton followFunc={followFunc} />;
  return(
    <FollowingOrUnFollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
      setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
      unFollowFunc={unFollowFunc}
    />
  );
};