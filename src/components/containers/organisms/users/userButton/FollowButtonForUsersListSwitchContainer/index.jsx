import PropTypes from "prop-types";
import styled from "styled-components";
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

const WaitingButton = ({ children }) => (
  <FollowChange>
    <FollowChangeLinkCover>
      <FollowChangeLinkNone>
        <span>{children}</span>
      </FollowChangeLinkNone>
    </FollowChangeLinkCover>
  </FollowChange>
);

WaitingButton.propTypes = {
  children: PropTypes.node.isRequired,
};

const FollowChange = styled.div`
  width: 100%;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// todo: Buttonをコンポーネント化
const FollowChangeLinkNone = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 118px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  color: #fff;
  font-weight: bold;
  background-color: rgb(15, 20, 25);
  cursor: pointer;
`;
