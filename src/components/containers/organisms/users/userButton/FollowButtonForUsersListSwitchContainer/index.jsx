import PropTypes from "prop-types";
import { useFollowAndUnFollow } from "../../../../../../hooks/useFollowAndUnFollow";
import { useGetErrorMessage } from "../../../../../../hooks/useGetErrorMessage";
import { ErrorMessage } from "../../../../pages/staticPages/ErrorMessage";
import { FollowButtonForUsersListSwitch } from "../FollowButtonForUsersListSwitch";

export const FollowButtonForUsersListSwitchContainer = ({
  userIdToFollowOrUnFollow,
  username,
}) => {
  const {
    changeFollowButtonStyle,
    currentUserId,
    currentUserName,
    error,
    followFunc,
    isFollowing,
    setChangeFollowButtonStyleToFalseFunc,
    setChangeFollowButtonStyleToTrueFunc,
    unFollowFunc,
  } = useFollowAndUnFollow(userIdToFollowOrUnFollow);
  const { getErrorMessage } = useGetErrorMessage();

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  return (
    <FollowButtonForUsersListSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      currentUserId={currentUserId}
      currentUserName={currentUserName}
      followFunc={followFunc}
      isFollowing={isFollowing}
      setChangeFollowButtonStyleToFalseFunc={
        setChangeFollowButtonStyleToFalseFunc
      }
      setChangeFollowButtonStyleToTrueFunc={
        setChangeFollowButtonStyleToTrueFunc
      }
      unFollowFunc={unFollowFunc}
      userIdToFollowOrUnFollow={userIdToFollowOrUnFollow}
      username={username}
    />
  );
};

FollowButtonForUsersListSwitchContainer.propTypes = {
  userIdToFollowOrUnFollow: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
