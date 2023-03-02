import { FollowButton } from '../../FollowButton';
import { FollowingOrUnFollowButtonSwitch } from '../../FollowingOrUnFollowButtonSwitch';

export const FollowOrFollowingOrUnFollowButtonSwitch = (props) => {
  const { changeFollowButtonStyle, followFunc, isFollowing, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc } = props;

  if (!isFollowing) return <FollowButton followFunc={followFunc} />;
  return (
    <FollowingOrUnFollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
      setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
      unFollowFunc={unFollowFunc}
    />
  );
};