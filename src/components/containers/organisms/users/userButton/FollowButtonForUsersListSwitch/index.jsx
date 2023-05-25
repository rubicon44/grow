import { useState } from "react";
import PropTypes from "prop-types";
import { FollowButton } from "../followButton";
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
  // todo: state位置検証
  const [showFollowingOrUnfollowButton, setShowFollowingOrUnfollowButton] =
    useState(false);

  const handleButtonClick = async () => {
    if (isFollowing) {
      setShowFollowingOrUnfollowButton(true);
      await unFollowFunc();
      setShowFollowingOrUnfollowButton(false);
    } else {
      setShowFollowingOrUnfollowButton(true);
      await followFunc();
      setShowFollowingOrUnfollowButton(false);
    }
  };

  if (isFollowing === null) return null;
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
      <FollowButton followFunc={followFunc} onClick={handleButtonClick} />
    );
  }

  if (String(currentUserId) === String(userIdToFollowOrUnFollow)) {
    return null;
  }

  return (
    <FollowOrFollowingOrUnFollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      followFunc={followFunc}
      isFollowing={isFollowing}
      onClick={handleButtonClick}
      showFollowingOrUnfollowButton={showFollowingOrUnfollowButton}
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
  userIdToFollowOrUnFollow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};
