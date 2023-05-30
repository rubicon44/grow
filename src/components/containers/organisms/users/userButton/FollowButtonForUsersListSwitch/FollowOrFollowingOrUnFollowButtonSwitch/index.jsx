import PropTypes from "prop-types";
import { FollowButton } from "../../followButton";
import { FollowingOrUnFollowButtonSwitch } from "../../FollowingOrUnFollowButtonSwitch";

export const FollowOrFollowingOrUnFollowButtonSwitch = (props) => {
  const {
    changeFollowButtonStyle,
    followFunc,
    isFollowing,
    setChangeFollowButtonStyleToFalseFunc,
    setChangeFollowButtonStyleToTrueFunc,
    unFollowFunc,
  } = props;

  if (!isFollowing) return <FollowButton followFunc={followFunc} />;
  return (
    <FollowingOrUnFollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      setChangeFollowButtonStyleToFalseFunc={
        setChangeFollowButtonStyleToFalseFunc
      }
      setChangeFollowButtonStyleToTrueFunc={
        setChangeFollowButtonStyleToTrueFunc
      }
      unFollowFunc={unFollowFunc}
    />
  );
};

FollowOrFollowingOrUnFollowButtonSwitch.propTypes = {
  changeFollowButtonStyle: PropTypes.bool.isRequired,
  followFunc: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  setChangeFollowButtonStyleToFalseFunc: PropTypes.func.isRequired,
  setChangeFollowButtonStyleToTrueFunc: PropTypes.func.isRequired,
  unFollowFunc: PropTypes.func.isRequired,
};
