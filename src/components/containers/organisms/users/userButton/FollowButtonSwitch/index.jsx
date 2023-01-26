import { FollowButton } from 'components/containers/organisms/Users/UserButton/FollowButton';
import { FollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowingOrUnFollowButtonSwitch';

export const FollowButtonSwitch = ({ changeFollowButtonStyle, currentUserId, followerId, followFunc, isFollowing, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc }) => {
  if(String(currentUserId) === String(followerId)) {
    return null;
  } else {
    return(
      isFollowing ? (
        <FollowingOrUnFollowButtonSwitch
          changeFollowButtonStyle={changeFollowButtonStyle}
          setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
          setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
          unFollowFunc={unFollowFunc}
        />
      ) : (
        <FollowButton followFunc={followFunc} />
      )
    );
  };
};