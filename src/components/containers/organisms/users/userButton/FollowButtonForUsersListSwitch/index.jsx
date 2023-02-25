import { useState } from 'react';
import { FollowButton } from 'components/containers/organisms/Users/UserButton/FollowButton';
import { FollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowingOrUnFollowButtonSwitch';
import { FollowOrFollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch/FollowOrFollowingOrUnFollowButtonSwitch';

export const FollowButtonForUsersListSwitch = (props) => {
  const { changeFollowButtonStyle, currentUserName, currentUserId, followFunc, isFollowing, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc, username, userIdToFollowOrUnFollow } = props;
  const [showFollowingOrUnfollowButton, setShowFollowingOrUnfollowButton] = useState(false);

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

  if (currentUserName === username) {
    return isFollowing ? (
      <FollowingOrUnFollowButtonSwitch
        changeFollowButtonStyle={changeFollowButtonStyle}
        setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
        setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
        unFollowFunc={unFollowFunc}
      />
    ) : (
      <FollowButton followFunc={followFunc} onClick={handleButtonClick} />
    );
  };

  if (String(currentUserId) === String(userIdToFollowOrUnFollow)) {
    return null;
  };

  return (
    <FollowOrFollowingOrUnFollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      followFunc={followFunc}
      isFollowing={isFollowing}
      onClick={handleButtonClick}
      showFollowingOrUnfollowButton={showFollowingOrUnfollowButton}
      setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
      setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
      unFollowFunc={unFollowFunc}
    />
  );
};