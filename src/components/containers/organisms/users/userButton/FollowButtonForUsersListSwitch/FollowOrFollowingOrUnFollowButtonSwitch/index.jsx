import { FollowButton } from 'components/containers/organisms/Users/UserButton/FollowButton';
import { FollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowingOrUnFollowButtonSwitch';

export const FollowOrFollowingOrUnFollowButtonSwitch = (props) => {
  const { changeFollowButtonStyle, followFunc, isFollowing, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc } = props;
  return (
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