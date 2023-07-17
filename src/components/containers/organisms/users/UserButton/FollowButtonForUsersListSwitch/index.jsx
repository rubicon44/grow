import PropTypes from "prop-types";
import { FollowButton } from "../FollowButton";
import { FollowingOrUnFollowButtonSwitch } from "../FollowingOrUnFollowButtonSwitch";
import { FollowOrFollowingOrUnFollowButtonSwitch } from "./FollowOrFollowingOrUnFollowButtonSwitch";

export const FollowButtonForUsersListSwitch = (props) => {
  const {
    changeFollowButtonStyle,
    currentUserName,
    currentUserId,
    followFunc,
    isFollowing,
    setChangeFollowButtonStyleToFalseFunc,
    setChangeFollowButtonStyleToTrueFunc,
    unFollowFunc,
    username,
    userIdToFollowOrUnFollow,
  } = props;

  if (isFollowing === null) return null;
  // 「if (currentUserName === username)」より前に定義(先にフォローボタンが表示されるのを防ぐため)
  if (String(currentUserId) === String(userIdToFollowOrUnFollow)) {
    return null;
  }

  if (currentUserName === username) {
    return isFollowing ? (
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
    ) : (
      <FollowButton followFunc={followFunc} />
    );
  }

  return (
    <FollowOrFollowingOrUnFollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      followFunc={followFunc}
      isFollowing={isFollowing}
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

FollowButtonForUsersListSwitch.defaultProps = {
  isFollowing: null,
};

FollowButtonForUsersListSwitch.propTypes = {
  changeFollowButtonStyle: PropTypes.bool.isRequired,
  currentUserName: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  followFunc: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool,
  setChangeFollowButtonStyleToFalseFunc: PropTypes.func.isRequired,
  setChangeFollowButtonStyleToTrueFunc: PropTypes.func.isRequired,
  unFollowFunc: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  userIdToFollowOrUnFollow: PropTypes.string.isRequired,
};
