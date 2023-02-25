import { FollowButton } from 'components/containers/organisms/Users/UserButton/FollowButton';
import { FollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowingOrUnFollowButtonSwitch';

export const FollowButtonSwitch = ({ changeFollowButtonStyle, currentUserId, followFunc, isFollowing, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc, userIdToFollowOrUnFollow }) => {
  // console.log(isFollowing);
  if(String(currentUserId) === String(userIdToFollowOrUnFollow)) {
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