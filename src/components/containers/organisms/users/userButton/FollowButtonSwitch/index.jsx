import PropTypes from "prop-types";
import { FollowButton } from "../followButton";
import { FollowingOrUnFollowButtonSwitch } from "../FollowingOrUnFollowButtonSwitch";

export const FollowButtonSwitch = ({
  changeFollowButtonStyle,
  currentUserId,
  followFunc,
  isFollowing,
  setChangeFollowButtonStyleToFalseFunc,
  setChangeFollowButtonStyleToTrueFunc,
  unFollowFunc,
  userIdToFollowOrUnFollow,
}) => {
  if (String(currentUserId) === String(userIdToFollowOrUnFollow)) return null;
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

FollowButtonSwitch.propTypes = {
  changeFollowButtonStyle: PropTypes.bool.isRequired,
  currentUserId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  followFunc: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  setChangeFollowButtonStyleToFalseFunc: PropTypes.func.isRequired,
  setChangeFollowButtonStyleToTrueFunc: PropTypes.func.isRequired,
  unFollowFunc: PropTypes.func.isRequired,
  userIdToFollowOrUnFollow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
